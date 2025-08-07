# NawahToken.sol

This folder contains the official smart contract for Nawah Token (NWTK).  
The contract is upgradeable (using OpenZeppelin) and includes:

- 0.5% transaction fee
- 50% of fees go to a support fund
- Fees accumulate inside the contract and are withdrawable
- Ownership-based management for updating settings

## Deployment Instructions

1. Compile using Solidity ^0.8.17 with OpenZeppelin contracts-upgradeable
2. Deploy via a proxy (UUPS or Transparent)
3. Call `initialize()` (no parameters needed) — it will assign msg.sender as the owner, feeCollector, and supportFund.
