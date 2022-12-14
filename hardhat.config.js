require("@nomiclabs/hardhat-waffle");
require("@atixlabs/hardhat-time-n-mine");
require("solidity-coverage");
var crypto = require("crypto");
require("dotenv").config();
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: {
    compilers: [ {
      version: "0.8.15",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      }
    },
    {
      version: "0.8.13",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      }
    },{
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  },
    {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      }
    },
    {
      version: "0.5.16",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      }
    },
    {
      version: "0.4.18",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      }
    },
        {
      version: "0.8.3",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      }
    },
  ]
  },
  mocha: {
    timeout: 100000,
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 5,
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://bsc-dataseed1.defibit.io/", //"https://bsc-dataseed1.defibit.io/",//"http://localhost:8547", 'https://cronosrpc-1.xstaking.sg', "https://data-seed-prebsc-1-s1.binance.org:8545"
      },
      accounts: {
        count: 200,
      },
    },
    bsctest: {
      url: "https://data-seed-prebsc-1-s3.binance.org:8545",
      accounts: [
        process.env.TESTNET_PKEY1,
        process.env.TESTNET_PKEY2,
        process.env.TESTNET_PKEY3,
        process.env.TESTNET_PKEY4,
        process.env.TESTNET_PKEY5,
      ],
    }, 

  },
  etherscan:{
    apiKey: process.env.ETHERSCAN_API
  },
  gasReporter: {
    currency: "EUR",
    gasPrice: 5,
    coinmarketcap:process.env.CMC_API,
    token:"BNB",
    url:"https://bsc-1.defibit.io/"
},
  
};
