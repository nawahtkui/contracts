# Nawah Token — UUPS Upgradeable

This repository contains the NawahToken (NWTK) smart contract configured as a UUPS-upgradeable ERC20 token with transaction fees and separate support/fee collectors.

## Contents
- `contracts/NawahToken.sol` — upgradeable ERC20 implementing UUPS + ReentrancyGuard.
- `scripts/deploy_nawah.js` — Hardhat deploy script using `@openzeppelin/hardhat-upgrades`.
- `test/` — example tests (included).
- `hardhat.config.js`, `package.json`, `.env.example`.

## Quickstart
1. Install dependencies:
```bash
npm install
```

2. Rename `.env.example` to `.env` and fill `BSCTESTNET_URL` and `PRIVATE_KEY`.

3. Deploy to testnet:
```bash
npm run deploy:bsctestnet
```

4. Run tests:
```bash
npm test
```

## Security notes
- Use multisig for `feeCollector` and `supportFund`.
- Test upgrades on testnets before mainnet.
- Consider third-party audits before large value deployments.
