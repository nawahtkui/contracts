// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  console.log("📦 Deploying NawahToken...");

  // الحصول على مصنع العقد
  const Token = await hre.ethers.getContractFactory("NawahToken");

  // نشر العقد
  const token = await Token.deploy();

  // الانتظار حتى ينتهي النشر
  await token.deployed();

  // طباعة العنوان النهائي
  console.log("✅ NawahToken deployed to:", token.address);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
