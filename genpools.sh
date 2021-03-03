#!/usr/bin/env bash
set -e

if [ ! -f "$1" ]; then
  exit 1
fi

_header="import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = ["
_footer="]
export default farms"

_pid=0

while IFS= read -r _pool; do
  _risk=$(echo "$_pool" | jq .risk | sed 's/^\"//g; s/\"$//g')
  _isTokenOnly=$(echo "$_pool" | jq .isTokenOnly | sed 's/^\"//g; s/\"$//g')
  _lpSymbol=$(echo "$_pool" | jq .lpSymbol | sed 's/^\"//g; s/\"$//g')
  _lpAddress=$(echo "$_pool" | jq .lpAddress | sed 's/^\"//g; s/\"$//g')
  _tokenSymbol=$(echo "$_pool" | jq .tokenSymbol | sed 's/^\"//g; s/\"$//g')
  _tokenAddress=$(echo "$_pool" | jq .tokenAddress | sed 's/^\"//g; s/\"$//g')
  _quoteTokenSymbol=$(echo "$_pool" | jq .quoteTokenSymbol | sed 's/^\"//g; s/\"$//g')
  _quoteTokenAddress=$(echo "$_pool" | jq .quoteTokenAddress | sed 's/^\"//g; s/\"$//g')

  pools="$pools\n{
pid: $_pid,
risk: $_risk,
isTokenOnly: $([ "$_isTokenOnly" == "true" ] && echo "true" || echo "false"),
lpSymbol: \"$_lpSymbol\",
lpAddresses: {
97: \"\",
56: \"$_lpAddress\",
},
tokenSymbol: \"$_tokenSymbol\",
tokenAddresses: {
97: \"\",
56: \"$_tokenAddress\",
},
quoteTokenSymbol: $_quoteTokenSymbol,
quoteTokenAdresses: $_quoteTokenAddress,
},"

  _pid=$((_pid+1))
done < <(jq -c '.[]' < "$1")

echo -e "$_header\n$pools\n$_footer"
