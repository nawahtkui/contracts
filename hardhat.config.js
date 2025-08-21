require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");


const { BSC_TESTNET_PRIVATE_KEY, BSC_TESTNET_RPC } = process.env;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
solidity: {
version: "0.8.20",
settings: {
optimizer: { enabled: true, runs: 200 },
},
},
networks: {
hardhat: {},
bscTestnet: {
url: BSC_TESTNET_RPC || "https://data-seed-prebsc-1-s1.bnbchain.org:8545/",
accounts: BSC_TESTNET_PRIVATE_KEY ? [BSC_TESTNET_PRIVATE_KEY] : [],
chainId: 97,
},
},
};
