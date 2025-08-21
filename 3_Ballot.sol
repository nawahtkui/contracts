// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;


/**

* @title Ballot

* @dev Simple voting with delegation, adapted from Solidity docs

*/

contract Ballot {

struct Voter {

uint256 weight; // weight accumulated by delegation

bool voted; // if true, that person already voted

address delegate;

uint256 vote; // index of the voted proposal

}


struct Proposal {

bytes32 name; // short name (up to 32 bytes)

uint256 voteCount; // number of accumulated votes

}


address public chairperson;


mapping(address => Voter) public voters;

Proposal[] public proposals;


/**

* @dev Create a new ballot to choose one of `proposalNames`.

*/

constructor(bytes32[] memory proposalNames) {

chairperson = msg.sender;

voters[chairperson].weight = 1;

for (uint256 i = 0; i < proposalNames.length; i++) {

proposals.push(Proposal({name: proposalNames[i], voteCount: 0}));

}

}


/**

* @dev Give `voter` the right to vote on this ballot. Only callable by chairperson.

*/

function giveRightToVote(address voter) external {

require(msg.sender == chairperson, "only chairperson");

require(!voters[voter].voted, "voter already voted");

require(voters[voter].weight == 0, "voter already has right");

voters[voter].weight = 1;

}


/**

* @dev Delegate your vote to the voter `to`.

*/

function delegate(address to) external {

Voter storage sender = voters[msg.sender];

require(sender.weight != 0, "no right to vote");

require(!sender.voted, "already voted");

require(to != msg.sender, "self-delegation disallowed");


while (voters[to].delegate != address(0)) {

to = voters[to].delegate;

require(to != msg.sender, "delegation loop");

}

