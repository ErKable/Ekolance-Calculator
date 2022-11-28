const { ethers } = require("hardhat");
const { expect, assert } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe(`Calculator test`, function(){
    
    async function deploy(){
        let owner = ethers.provider.getSigner(0)
        let ownerAddress = await owner.getAddress()

        let contractName = "calculator"
        let calculator = await(await ethers.getContractFactory(contractName, owner)).deploy()
        let calcAddress = calculator.address
        console.log(`Calculator deployed to address ${calcAddress}`);
        return{owner, ownerAddress, calculator, calcAddress}
    }

    it(`Testing add`, async function(){
        let{owner, ownerAddress, calculator, calcAddress} = await loadFixture(deploy)
        let firstValue = 5;
        let secondValue = 9;

        let add = await calculator.add(firstValue, secondValue);
        console.log(`Addtion result ${add}`);
        expect(add).to.equal(firstValue+secondValue)        
    })
    it(`Testing sub`, async function(){
        let{owner, ownerAddress, calculator, calcAddress} = await loadFixture(deploy)
        let firstValue = 5;
        let secondValue = 9;

        let sub = await calculator.sub(firstValue, secondValue)
        console.log(`Subtraction result ${sub}`);
        expect(sub).to.equal(firstValue-secondValue)        
    })

    it(`Testing mul`, async function(){
        let{owner, ownerAddress, calculator, calcAddress} = await loadFixture(deploy)
        let firstValue = 5;
        let secondValue = 9;

        let mul = await calculator.mul(firstValue, secondValue)
        console.log(`Moltiplication result ${mul}`);
        expect(mul).to.equal(firstValue*secondValue)        
    })

    it(`Testing div`, async function(){
        let{owner, ownerAddress, calculator, calcAddress} = await loadFixture(deploy)
        let firstValue = 5;
        let secondValue = 9;

        let div = await calculator.div(firstValue, secondValue)
        console.log(`Division result ${div} (remember that solidity does not support decimal numbers)`);
        expect(div).to.equal(parseInt(firstValue/secondValue))        
    })
    it(`Testing mod`, async function(){
        let{owner, ownerAddress, calculator, calcAddress} = await loadFixture(deploy)
        let firstValue = 5;
        let secondValue = 9;

        let mod = await calculator.mod(firstValue, secondValue)
        console.log(`Modulus result ${mod}`);
        expect(mod).to.equal(firstValue % secondValue)
        
    })
})