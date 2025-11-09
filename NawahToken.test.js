// test/NawahToken.test.js
const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("NawahToken (upgradeable)", function () {
  let Nawah, nawah, owner, addr1, addr2;

  beforeEach(async function () {
    Nawah = await ethers.getContractFactory("NawahToken");
    [owner, addr1, addr2] = await ethers.getSigners();

    nawah = await upgrades.deployProxy(Nawah, [], { initializer: 'initialize' });
    await nawah.deployed();
  });

  it("has correct name and symbol and total supply", async function () {
    expect(await nawah.name()).to.equal("Nawah Token");
    expect(await nawah.symbol()).to.equal("NWTK");
    const total = await nawah.totalSupply();
    expect(total).to.equal(ethers.utils.parseUnits("100000000", 18));
  });

  it("charges transaction fee and accumulates correctly", async function () {
    // owner transfers 1,000 tokens to addr1 (owner is feeCollector by default so exempt)
    await nawah.transfer(addr1.address, ethers.utils.parseUnits("1000", 18));
    // set feeCollector to owner to test normal users paying fee
    await nawah.connect(owner).setFeeCollector(owner.address);
    // make addr1 transfer to addr2 (should pay fee)
    await nawah.connect(addr1).transfer(addr2.address, ethers.utils.parseUnits("100", 18));
    const accFee = await nawah.accumulatedFeeCollector();
    const accSupport = await nawah.accumulatedSupportFund();
    // transactionFeeBP default 50 => 0.5% of 100 = 0.5 token; supportFeeBP 5000 => 50% of 0.5 = 0.25
    expect(accFee).to.equal(ethers.utils.parseUnits("0.25", 18));
    expect(accSupport).to.equal(ethers.utils.parseUnits("0.25", 18));
  });
});
