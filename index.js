const ChainId = {
  ETHEREUM: 1,
  OPTIMISM: 10,
  MATIC: 137,
  MATIC_TESTNET: 80002,
  FANTOM: 250,
  FANTOM_TESTNET: 4002,
  BSC: 56,
  BSC_TESTNET: 97,
  ARBITRUM: 42161,
  ARBITRUM_TESTNET: 421614,
  HECO: 128,
  HECO_TESTNET: 256,
  HARMONY: 1666600000,
  HARMONY_TESTNET: 1666700000,
  OKEX: 66,
  OKEX_TESTNET: 65,
  HARDHAT: 31337,
  AVALANCHE: 43114,
  AVALANCHE_TESTNET: 43113,
  MANTLE: 5000,
  MANTLE_TESTNET: 5003,
  TELOS: 40,
  TELOS_TESTNET: 41,
  TAIKO: 167000,
  TAIKO_TESTNET: 167009,
}

const POPS_ADDRESS = {
  [ChainId.AVALANCHE]: "0x240248628B7B6850352764C5dFa50D1592A033A8",
  [ChainId.TELOS]: "0x173fd7434b8b50df08e3298f173487ebdb35fd14",
  [ChainId.TELOS_TESTNET]: "0x950570d7B3CeC2d93b506d2D4eB53f38cbD130b0",
}

const USDC_ADDRESS = {
  [ChainId.ETHEREUM]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  [ChainId.OPTIMISM]: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
  [ChainId.ARBITRUM]: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
  [ChainId.MATIC]: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  [ChainId.FANTOM]: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
  [ChainId.BSC]: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  [ChainId.HARMONY]: "0x985458E523dB3d53125813eD68c274899e9DfAb4",
  [ChainId.HECO]: "0x9362Bbef4B8313A8Aa9f0c9808B80577Aa26B73B",
  [ChainId.OKEX]: "0xc946DAf81b08146B1C7A8Da2A851Ddf2B3EAaf85",
  [ChainId.AVALANCHE]: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
  [ChainId.TELOS]: "0x8D97Cea50351Fb4329d591682b148D43a0C3611b",
  [ChainId.TELOS_TESTNET]: "0xB38239b39f141CB9CdBf25e86f5eD37a6915d2DD",
  [ChainId.MANTLE]: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",
  [ChainId.MANTLE_TESTNET]: "0xbb74689297a783eeffaefcc1334939e19f139c86",
  [ChainId.TAIKO]: "0x07d83526730c7438048D55A4fc0b850e2aaB6f0b",
  [ChainId.TAIKO_TESTNET]: "0x7ac3e85331fc614716a2e4ef3d3f8229a42e7412",
}

const USDT_ADDRESS = {
  [ChainId.ETHEREUM]: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  [ChainId.OPTIMISM]: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
  [ChainId.ARBITRUM]: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
  [ChainId.MATIC]: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  [ChainId.FANTOM]: "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
  [ChainId.BSC]: "0x55d398326f99059fF775485246999027B3197955",
  [ChainId.HARMONY]: "0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f",
  [ChainId.HECO]: "0xa71EdC38d189767582C38A3145b5873052c3e47a",
  [ChainId.OKEX]: "0x382bB369d343125BfB2117af9c149795C6C65C50",
  [ChainId.AVALANCHE]: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
  [ChainId.TELOS]: "0x975Ed13fa16857E83e7C493C7741D556eaaD4A3f",
  [ChainId.TELOS_TESTNET]: "0xB38239b39f141CB9CdBf25e86f5eD37a6915d2DD",
  [ChainId.MANTLE]: "0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE",
  [ChainId.MANTLE_TESTNET]: "0x3c8d3fcd0b0bd6f46c8883db5d14a8f510a4591d",
  [ChainId.TAIKO]: "0x2DEF195713CF4a606B49D07E520e22C17899a736",
  [ChainId.TAIKO_TESTNET]: "0x08f7340df921f5559fece57fabe39bb49930680e",
}

const WNATIVE_ADDRESS = {
  [ChainId.ETHEREUM]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  [ChainId.OPTIMISM]: "0x4200000000000000000000000000000000000006",
  [ChainId.ARBITRUM]: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  [ChainId.MATIC]: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  [ChainId.FANTOM]: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
  [ChainId.FANTOM_TESTNET]: "0xf1277d1Ed8AD466beddF92ef448A132661956621",
  [ChainId.BSC]: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  [ChainId.BSC_TESTNET]: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
  [ChainId.HECO]: "0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F",
  [ChainId.HECO_TESTNET]: "0x5B2DA6F42CA09C77D577a12BeaD0446148830687",
  [ChainId.HARMONY]: "0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a",
  [ChainId.HARMONY_TESTNET]: "0x7a2afac38517d512E55C0bCe3b6805c10a04D60F",
  [ChainId.OKEX]: "0x8F8526dbfd6E38E3D8307702cA8469Bae6C56C15",
  [ChainId.OKEX_TESTNET]: "0x2219845942d28716c0F7C605765fABDcA1a7d9E0",
  [ChainId.AVALANCHE]: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
  [ChainId.AVALANCHE_TESTNET]: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
  [ChainId.TELOS]: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
  [ChainId.TELOS_TESTNET]: "0x6E2542aFC68a1697FeB2810437DF9409D3b93493",
  [ChainId.MANTLE]: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
  [ChainId.MANTLE_TESTNET]: "0xb1eda18c1b730a973dac2ec37cfd5685d7de10dd",
  [ChainId.TAIKO]: "0xA51894664A773981C6C112C43ce576f315d5b1B6",
  [ChainId.TAIKO_TESTNET]: "0xae2C46ddb314B9Ba743C6dEE4878F151881333D9",
}

const DAI_ADDRESS = {
  [ChainId.ETHEREUM]: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  [ChainId.ARBITRUM]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
  [ChainId.MATIC]: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  [ChainId.FANTOM]: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
  [ChainId.BSC]: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  [ChainId.HARMONY]: "0xEf977d2f931C1978Db5F6747666fa1eACB0d0339",
  [ChainId.HECO]: "0x3D760a45D0887DFD89A2F5385a236B29Cb46ED2a",
  [ChainId.OKEX]: "0x21cDE7E32a6CAF4742d00d44B07279e7596d26B9",
  [ChainId.AVALANCHE]: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
}

const FACTORY_ADDRESS = {
  [ChainId.ETHEREUM]: "0x2F0C7C98462651BB2102F6Cd05acDAd333E031b0",
  [ChainId.OPTIMISM]: "0x2F0C7C98462651BB2102F6Cd05acDAd333E031b0",
  [ChainId.ARBITRUM]: "0x2F0C7C98462651BB2102F6Cd05acDAd333E031b0",
  [ChainId.MATIC]: "0x735ab9808d792B5c8B54e31196c011c26C08b4ce",
  [ChainId.FANTOM]: "0x98F23162E3a7FE610aC89C88E4217a599A15858F",
  [ChainId.BSC]: "0xEe673452BD981966d4799c865a96e0b92A8d0E45",
  [ChainId.BSC_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
  [ChainId.HECO]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
  [ChainId.HECO_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
  [ChainId.HARMONY]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
  [ChainId.HARMONY_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
  [ChainId.OKEX]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
  [ChainId.OKEX_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
  [ChainId.AVALANCHE]: "0x9c60c867ce07a3c403e2598388673c10259ec768",
  [ChainId.AVALANCHE_TESTNET]: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
  [ChainId.TELOS]: "0xb630f53df13645bff0ef55eb44a8a490a7dd4514",
  [ChainId.TELOS_TESTNET]: "0x722F473AE392eF537D74f8F71602A584a10739F0",
}

const ROUTER_ADDRESS = {
  [ChainId.ETHEREUM]: "0x3D42A6B7cD504cA2283Bc8F37fea859a11Ca89fb",
  [ChainId.OPTIMISM]: "0x3D42A6B7cD504cA2283Bc8F37fea859a11Ca89fb",
  [ChainId.ARBITRUM]: "0x3D42A6B7cD504cA2283Bc8F37fea859a11Ca89fb",
  [ChainId.MATIC]: "0x0427B42bb6ae94B488dcf549B390A368F8F69058",
  [ChainId.BSC]: "0x63530632e8fE40aCf8f1f4324f7645256263b64f",
  [ChainId.BSC_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  [ChainId.FANTOM]: "0x422770Fcf2217AF03b4832e9f1F4Bd23946F828b",
  [ChainId.HECO]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  [ChainId.HECO_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  [ChainId.HARMONY]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  [ChainId.HARMONY_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  [ChainId.OKEX]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  [ChainId.OKEX_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  [ChainId.AVALANCHE]: "0xc7f372c62238f6a5b79136a9e5d16a2fd7a3f0f5",
  [ChainId.AVALANCHE_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  [ChainId.TELOS]: "0x9b1adec00a25fffd87a5bb17f61916e1c26f6844",
  [ChainId.TELOS_TESTNET]: "0x9876d5086C856b6aE1E0da71CF437AC477c052F2",
}

const ICECREAMVAN_V2_ADDRESS = {
  [ChainId.TELOS]: "0xa234bb3beb60e654601bea72ff3fb130f9ed2aa7",
  [ChainId.TELOS_TESTNET]: "0x5b2ae3f1237660b991a8398785919f6bcf63c177",
  [ChainId.MANTLE]: "0xe0ac81c7692b9119658e01edc1d743bf4c2ec21a",
  [ChainId.MANTLE_TESTNET]: "0x1cd15d197f80e2b98f22ec599110f03d12dd19f2",
  [ChainId.TAIKO]: "0x0CDde1DeAd51b156bd62113664D60b354b4DF4AB",
  [ChainId.TAIKO_TESTNET]: "0xaAE65B3b41F7C372c729B59B08Ca93d53E9B79b3",
}

const ICECREAMVAN_V2_OLD_ADDRESS = {
  [ChainId.MANTLE]: "0xa45adc5fcf61d879a85a1977f4eb4c8a7ba9c3e0",
}

const COMMUNITY_VAULT_ADDRESS = {
  [ChainId.MANTLE]: "0x7c96528ed1cb860329449403ee169d13ed21969e",
  [ChainId.MANTLE_TESTNET]: "0x80c7feabc98e2ea99653c3967f3b18ca121fb142",
  [ChainId.TELOS]: "0x6fb53c857ff57ecac48c39975ff68f627a6ee26e",
  [ChainId.TELOS_TESTNET]: "0x9d7c10778be751b9b6d6f3dcca571376f3e0b6b8",
}

const ZOMBIEVAN_ADDRESS = {
  [ChainId.TELOS]: "0x67275189e0deb3ce9eb918928c0011a0a582bd0e",
  [ChainId.TELOS_TESTNET]: "0x464861ce13d9403f2d01fe05ed32ca37201655ab",
  [ChainId.MANTLE]: "0x049a58a2aa1b15628aa0cda0433d716f6f63cbba",
  [ChainId.MANTLE_TESTNET]: "0x8587aaa85da7e82141c9221db1114979264caaf4",
}

// TODO: we don't really need this (we have it only on testnet, because of miso?)
const BENTOBOX_ADDRESS = {
  [ChainId.ETHEREUM]: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966",
  [ChainId.FANTOM]: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966",
  [ChainId.MATIC]: "0x0319000133d3AdA02600f0875d2cf03D442C3367",
  [ChainId.BSC]: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966",
  [ChainId.BSC_TESTNET]: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966",
  [ChainId.ARBITRUM]: "0x74c764D41B77DBbb4fe771daB1939B00b146894A",
  [ChainId.AVALANCHE]: "0x0711B6026068f736bae6B213031fCE978D48E026",
  [ChainId.HECO]: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966",
  [ChainId.HARMONY]: "0xA28cfF72b04f83A7E3f912e6ad34d5537708a2C2",
  [ChainId.TELOS_TESTNET]: "0x6e0c9802320CB43940e1dCf7E3Ef9A5ecE661710",
}

const BORING_HELPER_ADDRESS = {
  [ChainId.ETHEREUM]: "0x11Ca5375AdAfd6205E41131A4409f182677996E6",
  [ChainId.MATIC]: "0xA77a7fD5a16237B85E0FAd02C51f459D18AE93Cd",
  [ChainId.BSC]: "0x11Ca5375AdAfd6205E41131A4409f182677996E6",
  [ChainId.ARBITRUM]: "0x9AF28d4f7Fa007686958c306BD4c8c52c2b615b8",
  [ChainId.AVALANCHE]: "0xD18cA07a599bf5eBb9B7327871ad682F0b660748",
  [ChainId.HECO]: "0x11Ca5375AdAfd6205E41131A4409f182677996E6",
}

const ENS_REGISTRAR_ADDRESS = {
  [ChainId.ETHEREUM]: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
}

const MERKLE_DISTRIBUTOR_ADDRESS = {
  [ChainId.ETHEREUM]: "0xcBE6B83e77cdc011Cc18F6f0Df8444E5783ed982",
}

const MULTICALL2_ADDRESS = {
  [ChainId.ETHEREUM]: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
  [ChainId.ARBITRUM]: "0x80C7DD17B01855a6D2347444a0FCC36136a314de",
  [ChainId.ARBITRUM_TESTNET]: "0xa501c031958F579dB7676fF1CE78AD305794d579",
  [ChainId.FANTOM]: "0x22D4cF72C45F8198CfbF4B568dBdB5A85e8DC0B5",
  [ChainId.MATIC]: "0x02817C1e3543c2d908a590F5dB6bc97f933dB4BD",
  [ChainId.BSC]: "0xa9193376D09C7f31283C54e56D013fCF370Cd9D9",
  [ChainId.BSC_TESTNET]: "0x8F3273Fb89B075b1645095ABaC6ed17B2d4Bc576",
  [ChainId.AVALANCHE]: "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3",
  [ChainId.HECO]: "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3",
  [ChainId.HARMONY]: "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3",
  [ChainId.OKEX]: "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3",
  [ChainId.TELOS]: "0x7BD05Fb15Dc0B445e4005Be95bd92CC179b8de30",
  [ChainId.TELOS_TESTNET]: "0x6e634b5ed70035A1EF2459F6b0e50637E47d7208",
  [ChainId.OPTIMISM]: "0xcA11bde05977b3631167028862bE2a173976CA11",
  [ChainId.MANTLE]: "0xF1b4C7828538740FaEae1af405e21A2af098D34A",
  [ChainId.MANTLE_TESTNET]: "0xe130d0dcafbd98f7f4ba357da7cd504212d6f0ce",
  [ChainId.TAIKO]: "0xb736642f4BA86A24cE70928037d6cFf2f96c5D0C",
  [ChainId.TAIKO_TESTNET]: "0x18417eEd6260a9632D9aD7D0847329089597B708",
}

const SLUSH_ADDRESS = {
  [ChainId.AVALANCHE]: "0x29eda9bee2adf5b67f159cf8d279402b24e6d074",
  [ChainId.AVALANCHE_TESTNET]: "0x40174bf6df1a49d8faa84dd1c6440ab59371116e",
  [ChainId.TELOS_TESTNET]: "0x6f1eb479c68e9749dd1531cd8ae1a25a53f8cda2",
  [ChainId.TELOS]: "0xac45ede2098bc989dfe0798b4630872006e24c3f",
  [ChainId.MANTLE]: "0x8309bc8bb43fb54db02da7d8bf87192355532829",
  [ChainId.MANTLE_TESTNET]: "0x36bfe1f1b36cfdb4fe75cc592ff5dc6200ad3e0f",
  [ChainId.TAIKO]: "0x36BFE1F1b36CfdB4fe75cC592FF5dC6200Ad3E0f",
  [ChainId.TAIKO_TESTNET]: "0x36BFE1F1b36CfdB4fe75cC592FF5dC6200Ad3E0f",
};


const ICE_ADDRESS = {
  [ChainId.AVALANCHE]: "0xc74e4d4301b385f05139824ad651796fd494afed",
  [ChainId.AVALANCHE_TESTNET]: "0xc2b5190c4e766212eb0a7065acb623a4c003a4bc",
  [ChainId.TELOS_TESTNET]: "0xe77de2c82c9e6fa0056bc91fb5d67e140867bd44",
  [ChainId.TELOS]: "0xaae65b3b41f7c372c729b59b08ca93d53e9b79b3",
  [ChainId.MANTLE]: "0x005e16eccdfd3ea76e7b777a1beb7b826e3aa7e3",
  [ChainId.MANTLE_TESTNET]: "0x0c4e57a3a3ef4790c4848a711851dc08e8a16da7",
  [ChainId.TAIKO]: "0x0c4e57A3a3EF4790C4848a711851DC08e8A16dA7",
  [ChainId.TAIKO_TESTNET]: "0x0c4e57A3a3EF4790C4848a711851DC08e8A16dA7",
};

const ICECREAMZOMBIES_NFT_ADDRESS = {
  [ChainId.TELOS_TESTNET]: ["0x27b5624e1d92c077a0c249909584cd3455dad875"],
  [ChainId.TELOS]: ["0x581b6d860aa138c46dcaf6d5c709cd070cd77eb8"],
  [ChainId.MANTLE]: ["0x21b276de139ce8c75a7b4f750328dbf356195b49"],
  [ChainId.MANTLE_TESTNET]: ["0x081d8db959b655a41948dfd623b7174c26f7a807"], // Test Utility NFTs
};

const STLOSTOKEN_ADDRESS = {
  [ChainId.TELOS_TESTNET]: "0xa9991E4daA44922D00a78B6D986cDf628d46C4DD",
  [ChainId.TELOS]: "0xB4B01216a5Bc8F1C8A33CD990A1239030E60C905",
};


const NATIVE_PAYMENT_TOKEN_ADDRESS =
  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

const BRIDGE_V2_ADDRESS = {
  [ChainId.TELOS]: "0xc00740a53ee5a44932339680d692259731d082f8",
  [ChainId.TELOS_TESTNET]: "0x733C3765509cf9dF59AAe49e084546F8143e23d2",
  [ChainId.MANTLE]: "0x960105e099cd32c0cf3168dafd13742d689f3af5",
  [ChainId.MANTLE_TESTNET]: "0x0e76e52940fd2f852120a95bf1a19522c47c325a",
  [ChainId.TAIKO]: "0xE130d0DcAfbd98f7f4ba357DA7cD504212d6F0ce",
  [ChainId.TAIKO_TESTNET]: "0xE130d0DcAfbd98f7f4ba357DA7cD504212d6F0ce",
};


const V3_POOL_INIT_CODE_HASH = {
  [ChainId.TELOS]: '0x177d5fbf994f4d130c008797563306f1a168dc689f81b2fa23b4396931014d91',
  [ChainId.TELOS_TESTNET]: '0x177d5fbf994f4d130c008797563306f1a168dc689f81b2fa23b4396931014d91',
  [ChainId.MANTLE]: '0x177d5fbf994f4d130c008797563306f1a168dc689f81b2fa23b4396931014d91',
  [ChainId.MANTLE_TESTNET]: '0xf96d2474815c32e070cd63233f06af5413efc5dcb430aee4ff18cc29007c562d',
  [ChainId.TAIKO]: '0xf96d2474815c32e070cd63233f06af5413efc5dcb430aee4ff18cc29007c562d',
  [ChainId.TAIKO_TESTNET]: '0xf96d2474815c32e070cd63233f06af5413efc5dcb430aee4ff18cc29007c562d',
}

const V3_ALGEBRA_FACTORY_ADDRESS = {
  [ChainId.TELOS]: '0xA09BAbf9A48003ae9b9333966a8Bda94d820D0d9',
  [ChainId.TELOS_TESTNET]: '0x2746B1a7B780f128F0db99d9fc60C2DB3E4a7bd5',
  [ChainId.MANTLE]: '0xC848bc597903B4200b9427a3d7F61e3FF0553913',
  [ChainId.MANTLE_TESTNET]: '0x10253594A832f967994b44f33411940533302ACb',
  [ChainId.TAIKO_TESTNET]: '0x597502d47b0321de8A099F0BAcc769bAE35DA312',
}

const V3_ALGEBRA_POOL_DEPLOYER_ADDRESS = {
  [ChainId.TELOS]: '0x061e47Ab9f31D293172efb88674782f80eCa88de',
  [ChainId.TELOS_TESTNET]: '0xE63AEf68c9C80C06d241d44B3C21Da4da2E582Bd',
  [ChainId.MANTLE]: '0x9dE2dEA5c68898eb4cb2DeaFf357DFB26255a4aa',
  [ChainId.MANTLE_TESTNET]: '0xd7cB0E0692f2D55A17bA81c1fE5501D66774fC4A',
  [ChainId.TAIKO_TESTNET]: '0xf992eBeAB671AAc668Db5f8986276b55E49ec928',
}

const V3_ALGEBRA_QUOTER_ADDRESS = {
  [ChainId.TELOS]: '0x067f4bb3696744a79b484Fa137Ee087cebaC5336',
  [ChainId.TELOS_TESTNET]: '0x7064C7Bb85979f008212877c4CE41285ddf5374C',
  [ChainId.MANTLE]: '0xC29ccA46641B9e6b5F7BacfAa9D48651E8b5a4b4',
  [ChainId.MANTLE_TESTNET]: '0x95E325A85B9E6cB4DeA2ccd96218e5F8365E0B0F',
  [ChainId.TAIKO_TESTNET]: '0xd4ad6dfbEd7e11aAE218022776881A54eBF22152',
}

const V3_SWAP_ROUTER_ADDRESS = {
  [ChainId.TELOS]: '0xc96afc666A4195366a46E4ca8C4f10f3C39Ee363',
  [ChainId.TELOS_TESTNET]: '0x2650e9EFe6D841622aA627cb9e493a8B8b2f9D7A',
  [ChainId.MANTLE]: '0x431C69C4b58d39B933f42C142C4b3B878Bb28562',
  [ChainId.MANTLE_TESTNET]: '0xd265f57c36AC60d3F7931eC5c7396966F0C246A7',
  [ChainId.TAIKO_TESTNET]: '0x43873Ea629264DB2b7d8549897A1bb339Dcb56A6',
}

const V3_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = {
  [ChainId.TELOS]: '0xf85bA8be4E5B82da25D68970b03F4FEBefD6Fa98',
  [ChainId.TELOS_TESTNET]: '0x805F104051415863Bbdf458cDCd52ceB5FEd9c01',
  [ChainId.MANTLE]: '0x7D24DE60A68ae47BE4E852cf03Dd4d8588B489Ec',
  [ChainId.MANTLE_TESTNET]: '0x0BFaCE9a5c9F884a4f09fadB83b69e81EA41424B',
  [ChainId.TAIKO_TESTNET]: '0xf83DeA487c6B604De33fdcACf6E2390300BFc96a',
}

const V3_MULTICALL_ADDRESS = {
  [ChainId.TELOS]: '0xe80a68554d8F2eE275f2eA76A4BBd15eD86B503c',
  [ChainId.TELOS_TESTNET]: '0xc8A85FD6511bf875646B3632Aedd60d5752610BC',
  [ChainId.MANTLE]: '0xb36ac257e6017908BF602B4Be8A094f75eCd956E',
  [ChainId.MANTLE_TESTNET]: '0x15fCbF9bC0797567053A8265b7E6f4eC43EA7327',
  [ChainId.TAIKO_TESTNET]: '0x915d500F7701d200C1CEAAce2c3668AD7c9Dd949',
}

const V3_FARMING_CENTER_OLD_ADDRESS = {
  [ChainId.TELOS]: '0x200537112BEFc090929C05e2C237ef66997a78F6',
  [ChainId.TELOS_TESTNET]: '0x54506e0a71f6c883dA3c7eaDb0aEbEDbaC0c59f5',
  [ChainId.MANTLE]: '0x4F999C0395BceAA940B39C8e8A582981DcA82f2a',
  [ChainId.MANTLE_TESTNET]: '0x03f8B4b140249Dc7B2503C928E7258CCe1d91F1A',
  [ChainId.TAIKO_TESTNET]: '0xb524e98602adB70Bda360670E3DC4cC1736a515F',
}

const V3_FARMING_CENTER_ADDRESS = {
  [ChainId.TELOS]: '0x0375A52aB4e2dd184F8cA37bBE01E8a66Bdca615',
  [ChainId.TELOS_TESTNET]: '0x54506e0a71f6c883dA3c7eaDb0aEbEDbaC0c59f5',
  [ChainId.MANTLE]: '0x9106046263593908945905C59b7a7aF200880e7f',
  [ChainId.MANTLE_TESTNET]: '0x03f8B4b140249Dc7B2503C928E7258CCe1d91F1A',
  [ChainId.TAIKO_TESTNET]: '0xb524e98602adB70Bda360670E3DC4cC1736a515F',
}

const V3_ETERNAL_FARMING_ADDRESS = {
  [ChainId.TELOS]: '0x7D24DE60A68ae47BE4E852cf03Dd4d8588B489Ec',
  [ChainId.TELOS_TESTNET]: '0xE416C0C29DBDb4Fa25870b835ad904c1E8478CDc',
  [ChainId.MANTLE]: '0xe2eb7d3e55612Fe94E3b4E07d65087B379a730aB',
  [ChainId.MANTLE_TESTNET]: '0x13fcE0acbe6Fb11641ab753212550574CaD31415',
  [ChainId.TAIKO_TESTNET]: '0x85Be30F65b1C133a2296BAFfb11B27cc00859fDB',
}

module.exports = {
  ChainId,
  POPS_ADDRESS,
  USDC_ADDRESS,
  USDT_ADDRESS,
  WNATIVE_ADDRESS,
  DAI_ADDRESS,
  FACTORY_ADDRESS,
  ROUTER_ADDRESS,
  ICECREAMVAN_V2_ADDRESS,
  ICECREAMVAN_V2_OLD_ADDRESS,
  COMMUNITY_VAULT_ADDRESS,
  ZOMBIEVAN_ADDRESS,
  BENTOBOX_ADDRESS,
  BORING_HELPER_ADDRESS,
  ENS_REGISTRAR_ADDRESS,
  MERKLE_DISTRIBUTOR_ADDRESS,
  MULTICALL2_ADDRESS,
  SLUSH_ADDRESS,
  ICE_ADDRESS,
  ICECREAMZOMBIES_NFT_ADDRESS,
  STLOSTOKEN_ADDRESS,
  NATIVE_PAYMENT_TOKEN_ADDRESS,
  BRIDGE_V2_ADDRESS,
  V3_POOL_INIT_CODE_HASH,
  V3_ALGEBRA_FACTORY_ADDRESS,
  V3_ALGEBRA_POOL_DEPLOYER_ADDRESS,
  V3_ALGEBRA_QUOTER_ADDRESS,
  V3_SWAP_ROUTER_ADDRESS,
  V3_NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  V3_MULTICALL_ADDRESS,
  V3_FARMING_CENTER_OLD_ADDRESS,
  V3_FARMING_CENTER_ADDRESS,
  V3_ETERNAL_FARMING_ADDRESS,
}