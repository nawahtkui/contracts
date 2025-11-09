const hre = require("hardhat");

async function deployContract(contractName, constructorArgs = []) {
  console.log(`\n🚀 Deploying ${contractName}...`);

  const [deployer] = await hre.ethers.getSigners();
  const balance = await deployer.getBalance();
  console.log(`Deploying with account: ${deployer.address}`);
  console.log(`Account balance: ${hre.ethers.utils.formatEther(balance)} ETH`);

  const Factory = await hre.ethers.getContractFactory(contractName);
  const contract = await Factory.deploy(...constructorArgs);
  await contract.deployed();

  console.log(`✅ ${contractName} deployed at: ${contract.address}`);
  console.log(`Transaction Hash: ${contract.deployTransaction.hash}`);

  // رابط مباشر على BscScan (اختياري)
  const networkName = hre.network.name;
  let bscScanPrefix = "https://testnet.bscscan.com"; // افتراض Testnet
  if (networkName === "bsc") bscScanPrefix = "https://bscscan.com";

  console.log(`BscScan URL: ${bscScanPrefix}/address/${contract.address}\n`);

  return contract;
}

async function main() {
  console.log("🎯 Starting multi-contract deployment...");

  // 1️⃣ نشر Nawah Token
  const nawahToken = await deployContract("NawahToken");

  // 2️⃣ نشر العقود المستقبلية (Staking, Options, NFT)
  // مثال: افتراض وجود عقد Staking يأخذ عنوان التوكن كمعامل
  // const stakingContract = await deployContract("StakingContract", [nawahToken.address]);

  // 3️⃣ إعدادات أولية بعد النشر (اختياري)
  // await nawahToken.setFeeCollector(deployer.address);
  // await nawahToken.setSupportFund(deployer.address);

  console.log("🎉 All deployments completed successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
