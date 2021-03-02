import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'PIKACHU-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x45b604027262cca499519ef66ed768c43211e0cf',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xd592dfe9e1b687b1d9dbdacf5b9f0789cc9cd584',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'PIKACHU-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5c2e3fde2a19abb72f6d43d9a8c0940f7d89af20',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xd592dfe9e1b687b1d9dbdacf5b9f0789cc9cd584',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 1,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 1,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 3,
    lpSymbol: 'LINK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686',
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    risk: 3,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 10,
    risk: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 12,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'PIKACHU',
    lpAddresses: {
      97: '',
      56: '0x45b604027262cca499519ef66ed768c43211e0cf', // PIKACHU-BUSD LP
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xd592dfe9e1b687b1d9dbdacf5b9f0789cc9cd584',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x45b604027262cca499519ef66ed768c43211e0cf', // PIKACHU-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'EGG',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
    },
    tokenSymbol: 'GOOSE',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'VIKING',
    lpAddresses: {
      97: '',
      56: '0x9b989a7b8963f4b08ec094710e2966fb3c7f6c43', // VIKING-BUSD LP
    },
    tokenSymbol: 'VIKING',
    tokenAddresses: {
      97: '',
      56: '0x896eDE222D3f7f3414e136a2791BDB08AAa25Ce0',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 17,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 19,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 21,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 29,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'VAI',
    lpAddresses: {
      97: '',
      56: '0xe62c5a3355068cc383d89ab831e000473c043cae', // VAI-BNB LP
    },
    tokenSymbol: 'VAI',
    tokenAddresses: {
      97: '',
      56: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 30,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'XVS',
    lpAddresses: {
      97: '',
      56: '0x41182c32f854dd97ba0e0b1816022e0acb2fc0bb', // XVS-BNB LP
    },
    tokenSymbol: 'XVS',
    tokenAddresses: {
      97: '',
      56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 22,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'LINK',
    lpAddresses: {
      97: '',
      56: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686', // LINK-WBNB LP
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 23,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 24,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 25,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BSCX',
    lpAddresses: {
      97: '',
      56: '0xa32a983a64ce21834221aa0ad1f1533907553136', // BSCX-BUSD LP
    },
    tokenSymbol: 'BSCX',
    tokenAddresses: {
      97: '',
      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 26,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'AUTO',
    lpAddresses: {
      97: '',
      56: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56', // AUTO-BNB LP
    },
    tokenSymbol: 'AUTO',
    tokenAddresses: {
      97: '',
      56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 27,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'ADA',
    lpAddresses: {
      97: '',
      56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf', // ADA-BNB LP
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 28,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'YFI',
    lpAddresses: {
      97: '',
      56: '0x68ff2ca47d27db5ac0b5c46587645835dd51d3c1', // YFI-BNB LP
    },
    tokenSymbol: 'YFI',
    tokenAddresses: {
      97: '',
      56: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 32,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'YFII',
    lpAddresses: {
      97: '',
      56: '0x574a978c2d0d36d707a05e459466c7a1054f1210', // YFII-BNB LP
    },
    tokenSymbol: 'YFII',
    tokenAddresses: {
      97: '',
      56: '0x7f70642d88cf1c4a3a7abb072b53b929b653eda5',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 33,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'REEF',
    lpAddresses: {
      97: '',
      56: '0x58b58cab6c5cf158f63a2390b817710826d116d0', // REEF-BNB LP
    },
    tokenSymbol: 'REEF',
    tokenAddresses: {
      97: '',
      56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 35,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BDO',
    lpAddresses: {
      97: '',
      56: '0x74690f829fec83ea424ee1f1654041b2491a7be9', // BDO-BNB LP
    },
    tokenSymbol: 'BDO',
    tokenAddresses: {
      97: '',
      56: '0x190b589cf9fb8ddeabbfeae36a813ffb2a702454',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
