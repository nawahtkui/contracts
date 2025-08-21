// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;


/**

* @title Storage

* @dev Store & retrieve a uint256 value

*/

contract Storage {

uint256 private number;


/**

* @dev Store a value in `number`.

* @param num value to store

*/

function store(uint256 num) external {

number = num;

}


/**

* @dev Return the current value of `number`.

*/

function retrieve() external view returns (uint256) {

return number;

}

}

