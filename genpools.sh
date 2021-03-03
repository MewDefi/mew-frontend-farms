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

_pid=0

while IFS= read -r _pool; do
  _risk=$(echo "$_pool" | jq .risk | sed 's/^\"//g; s/\"$//g')
  _alloc=$(echo "$_pool" | jq .allocation | sed 's/^\"//g; s/\"$//g')
  _fee=$(echo "$_pool" | jq .fee | sed 's/^\"//g; s/\"$//g')
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

  md="$md\n$_pid | $_lpSymbol | $([ "$_isTokenOnly" == "true" ] && echo "true" || echo "false") | $([ "$_isTokenOnly" == "true" ] && echo "$_tokenAddress" || echo "$_lpAddress") | $_alloc | $_fee"

  _pid=$((_pid+1))
done < <(jq -c '.[]' < "$1")

echo -e "$_mdheader$md\n$_mdfooter\n\n$_header\n$pools\n$_footer"
