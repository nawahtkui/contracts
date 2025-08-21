/* eslint-disable no-console */
const hre = require("hardhat");


async function main() {
const [deployer] = await hre.ethers.getSigners();
console.log("Deploying contracts with account:", deployer.address);


// Example: deploy Storage; change to your contract as needed
const Storage = await hre.ethers.getContractFactory("Storage");
const storage = await Storage.deploy();
await storage.deployed();


console.log("Storage deployed to:", storage.address);
}


main().catch((error) => {
console.error(error);
process.exitCode = 1;
});
