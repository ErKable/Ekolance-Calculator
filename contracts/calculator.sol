
// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract calculator {
    constructor() {       
    }

    function add(uint256 a, uint256 b) external pure returns(uint256){
        return a+b;
    }

    function sub(int256 a, int256 b) external pure returns(int256){
        return a-b;
    }

    function mul(uint256 a, uint256 b) external pure returns(uint256){
        return a*b;
    }

    function div(uint256 a, uint256 b) external pure returns(uint256){
        return a/b;
    }

    function mod(uint256 a, uint256 b) external pure returns(uint256){
        return a%b;
    }
}