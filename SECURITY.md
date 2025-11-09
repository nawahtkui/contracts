
---

# 🛡️ Security Policy — Nawah Token (NWTK)

**Maintainers:** Nawah Token Core Team
**Contact:** [security@nawahtoken.org](mailto:security@nawahtoken.org)

---

## 1️⃣ Overview

The **Nawah Token (NWTK)** smart contracts are designed with security, transparency, and upgradeability in mind.
This document outlines the **security policy**, ownership, vulnerability reporting, and responsible practices for contributors and users.

---

## 2️⃣ Contract Ownership

* The contracts are **Ownable** via OpenZeppelin’s upgradeable framework.
* The **owner** is initially the project deployer.
* Recommended for decentralization:

  * Multi-signature wallet (`MultiSig`) for critical functions.
  * Optional: `renounceOwnership()` after full audit and liquidity deployment.

---

## 3️⃣ Security Measures

* **Upgradeable Contracts (UUPS)** for safe future updates.
* **Reentrancy Protection** using `ReentrancyGuard` for sensitive functions.
* **Safe ERC20 Operations** with OpenZeppelin libraries.
* **Transaction Fee Management** stored in contract variables to avoid loss.
* **Access Controls:** Only `feeCollector` and `supportFund` can withdraw their respective balances.

---

## 4️⃣ Vulnerability Reporting

If you discover a **security vulnerability**, please follow these steps:

1. **Do NOT** open a public issue.
2. Contact the security team **privately**:

   ```
   security@nawahtoken.org
   ```
3. Include:

   * Description of the vulnerability.
   * Steps to reproduce.
   * Suggested mitigation (optional).
4. Our team will acknowledge within 48 hours and coordinate a fix or patch.

---

## 5️⃣ Pull Request & Contribution Security

All code contributions must adhere to these rules:

* Use **Solidity 0.8.20+**
* Include **NatSpec comments** for public/external functions.
* Write **automated tests** for new features (`Hardhat` / `Chai`).
* No hard-coded private keys or secrets.
* Follow OpenZeppelin best practices for ERC20 operations.

---

## 6️⃣ Incident Response

* Upon discovery of a vulnerability, the team will:

  1. Freeze affected contract functions if necessary.
  2. Deploy a secure upgrade (via UUPS) if feasible.
  3. Notify users and community about the issue responsibly.

---

## 7️⃣ Transparency & Community Trust

* **All fee collections** are recorded in contract storage (`accumulatedFeeCollector` and `accumulatedSupportFund`).
* **Withdrawals** are restricted to designated addresses only.
* Project team encourages **public audits** before mainnet deployment.

---

## 8️⃣ References

* OpenZeppelin Contracts: [https://docs.openzeppelin.com/contracts](https://docs.openzeppelin.com/contracts)
* Hardhat Security Guide: [https://hardhat.org](https://hardhat.org)

---

> ⚠️ **Disclaimer:** This document is for informational purposes only. Users should perform their own due diligence before interacting with Nawah Token smart contracts.

---

