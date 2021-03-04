#!/usr/bin/env bash
set -e

poolFile="$1"
tokenAdd="$2"
tokenBusdAdd="$3"
tokenBnbAdd="$4"
if [ "$poolFile" == "" ] || [ "$tokenAdd" == "" ] || [ "$tokenBusdAdd" == "" ] || [ "$tokenBnbAdd" == "" ]; then
  echo "usage: $0 <pool file> <token address> <token-busd address> <token-bnb address>"
  exit 1
fi
if [ ! -f "$poolFile" ]; then
  echo "error: $poolFile doesn't exist"
  exit 1
fi


_header="import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = ["
_footer="]
export default farms"

_mdheader="/*
PID | Name | TokenOnly | Address | AllocationBP | FeeBP
-|-|-|-|-|-"
_mdfooter="
## Allocation
BP | Multiplicator
-|-
100 | 1x
1000 | 10x
10000 | 100x

## Fee
BP | %
-|-
100 | 1%
1000 | 10%
10000 | 100%
*/"

_truffleheader="/*
const Token = artifacts.require(\"MewToken\");
const MasterChefV2 = artifacts.require(\"MasterChefV2\");

module.exports = async function(callback) {
let chef = await MasterChefV2.deployed();
let token = await Token.deployed();"
_trufflefooter="console.log(\"done.\");
}
*/"

_pid=0

while IFS= read -r _pool; do
  _risk="$(echo "$_pool" | jq .risk | sed 's/^\"//g; s/\"$//g')"
  _alloc="$(echo "$_pool" | jq .allocation | sed 's/^\"//g; s/\"$//g')"
  _fee="$(echo "$_pool" | jq .fee | sed 's/^\"//g; s/\"$//g')"
  _tokenOnly="$(echo "$_pool" | jq .tokenOnly | sed 's/^\"//g; s/\"$//g')"
  _nativeToken="$(echo "$_pool" | jq .nativeToken | sed 's/^\"//g; s/\"$//g')"
  _lpSymbol="$(echo "$_pool" | jq .lpSymbol | sed 's/^\"//g; s/\"$//g')"
  _lpAddress="$(echo "$_pool" | jq .lpAddress | sed 's/^\"//g; s/\"$//g')"
  _tokenSymbol="$(echo "$_pool" | jq .tokenSymbol | sed 's/^\"//g; s/\"$//g')"
  _tokenAddress="$(echo "$_pool" | jq .tokenAddress | sed 's/^\"//g; s/\"$//g')"
  _quoteTokenSymbol="$(echo "$_pool" | jq .quoteTokenSymbol | sed 's/^\"//g; s/\"$//g')"
  _quoteTokenAddress="$(echo "$_pool" | jq .quoteTokenAddress | sed 's/^\"//g; s/\"$//g')"

  tokenQuoteAdd="$([ "$_quoteTokenSymbol" == "QuoteToken.BUSD" ] && printf "$tokenBusdAdd" || printf "$tokenBnbAdd")"
  pools="$pools\n{ pid: $_pid, risk: $_risk, isTokenOnly: $([ "$_tokenOnly" == "true" ] && printf "true" || printf "false"), lpSymbol: \"$_lpSymbol\", lpAddresses: { 97: \"\", 56: \"$([ ! "$_nativeToken" == "true" ] && printf "$_lpAddress" || printf "$tokenQuoteAdd" )\", // $_lpSymbol\n}, tokenSymbol: \"$_tokenSymbol\", tokenAddresses: { 97: \"\", 56: \"$([ "$_nativeToken" == "true" ] && printf "$tokenAdd" || printf "$_tokenAddress")\", // $_tokenSymbol\n}, quoteTokenSymbol: $_quoteTokenSymbol, quoteTokenAdresses: $_quoteTokenAddress, },"


  if [ "$_nativeToken" == "true" ]; then
    truffle="$truffle\nprocess.stdout.write(\"checking pool existence: $_lpSymbol...\"); if (chef.poolExistence(\"$([ "$_tokenOnly" == "true" ] && printf "$tokenAdd" || printf "$tokenQuoteAdd")\")) { console.log(\" pool already exists. skipping\"); } else { console.log(\" pool doesn't exist\"); process.stdout.write(\"adding pool: $_lpSymbol...\");"
    if [ "$_tokenOnly" == "true" ]; then
      truffle="$truffle\nawait chef.add(\"$_lpSymbol\", \"$_alloc\", \"$tokenAdd\", \"$_fee\", false); // $_lpSymbol"
      md="$md\n$_pid | $_lpSymbol | true | $_tokenAddress | $_alloc | $_fee"
    else
      truffle="$truffle\nawait chef.add(\"$_lpSymbol\", \"$_alloc\", \"$tokenQuoteAdd\", \"$_fee\", false); // $_lpSymbol"
      md="$md\n$_pid | $_lpSymbol | true | $tokenQuoteAdd | $_alloc | $_fee"
    fi
  else
    truffle="$truffle\nprocess.stdout.write(\"checking pool existence: $_lpSymbol...\"); if (chef.poolExistence(\"$([ "$_tokenOnly" == "true" ] && printf "$_tokenAddress" || printf "$_lpAddress")\")) { console.log(\" pool already exists. skipping\"); } else { console.log(\" pool doesn't exist\"); process.stdout.write(\"adding pool: $_lpSymbol...\");"
    truffle="$truffle\nawait chef.add(\"$_lpSymbol\", \"$_alloc\", $([ "$_tokenOnly" == "true" ] && printf "\"$_tokenAddress\"" || printf "\"$_lpAddress\""), \"$_fee\", false); // $_lpSymbol"
    md="$md\n$_pid | $_lpSymbol | $([ "$_tokenOnly" == "true" ] && printf "true" || printf "false") | $([ "$_tokenOnly" == "true" ] && printf "$_tokenAddress" || printf "$_lpAddress") | $_alloc | $_fee"
    fi
    truffle="$truffle\nconsole.log(\" done\");
  }"

_pid=$(($_pid+1))
done < <(jq -c '.[]' < "$poolFile")

echo -e "$_mdheader$md\n$_mdfooter\n\n$_truffleheader$truffle\n$_trufflefooter\n\n\n$_header\n$pools\n$_footer"
