// Import necessary modules
const HDWalletProvider = require('@truffle/hdwallet-provider');

// Uncomment this to load environment variables from a .env file for security
// require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;

// Set your mnemonics and project ID
const ganacheMnemonic = "sauce amused wall magic logic divide enroll retire scrap lawn question gain";
// const mnemonic = "taste state hurdle road normal lunch enter fly wealth useless return opera";
// const infura_project_id = PROJECT_ID;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost
      port: 7545,            // Standard Ethereum port for Ganache
      network_id: "*",       // Match any network ID
      gas: 6721975 // close to default Ganache limit
    },
    // Uncomment and adjust the following to deploy to the Polygon Mumbai network using Infura
    // polygonMumbai: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://polygon-mumbai.infura.io/v3/${infura_project_id}`),
    //   network_id: 80001,
    //   confirmations: 2,
    //   timeoutBlocks: 200,
    //   skipDryRun: true
    // }
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.20", // Fetch exact version from solc-bin
      // Uncomment the following lines if you need optimization or specific EVM settings
      settings: {
        optimizer: {
         enabled: true,
         runs: 200
        },
      //   evmVersion: "byzantium"
      }
    }
  }
};
