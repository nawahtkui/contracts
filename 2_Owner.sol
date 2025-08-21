// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;


/**

* @title Owner

* @dev Minimal ownable pattern with changeable owner

*/

contract Owner {

address private _owner;


event OwnerSet(address indexed oldOwner, address indexed newOwner);


modifier onlyOwner() {

require(msg.sender == _owner, "caller is not the owner");

_;

}


constructor() {

_owner = msg.sender;

emit OwnerSet(address(0), _owner);

}


/**

* @dev Change contract owner.

*/

function changeOwner(address newOwner) external onlyOwner {

require(newOwner != address(0), "new owner is the zero address");

emit OwnerSet(_owner, newOwner);

_owner = newOwner;

}


/**

* @dev Current owner address

*/

function getOwner() external view returns (address) {

return _owner;

}

}

