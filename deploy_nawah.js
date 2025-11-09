// scripts/deploy_nawah.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const Nawah = await ethers.getContractFactory("NawahToken");

  console.log("Deploying NawahToken proxy...");
  const nawah = await upgrades.deployProxy(Nawah, [], { initializer: 'initialize' });
  await nawah.deployed();

  console.log("NawahToken proxy deployed to:", nawah.address);
  console.log("Implementation address:", await upgrades.erc1967.getImplementationAddress(nawah.address));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
