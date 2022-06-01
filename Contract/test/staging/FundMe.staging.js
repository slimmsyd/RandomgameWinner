const { assert, expect } = require("chai");
const {getNamedAccounts, ethers,  network} = require("hardhat");
const {developMentChain} = require("../../helper-hardhat-config")


 describe("FundMe", async function() {
    //Test only for the consturctor 
    let fundMe;
    let deployer;
    const sendValue = ethers.utils.parseEther("1") // 1eth 1000000000000000000

   beforeEach(async function()  { 
    //deploy fund me contract 
    //using hardhat deploy
    // const accounts = await ethers.getSigners() //return account section in network
    deployer = (await getNamedAccounts()).deployer
    fundMe = await ethers.getContract("Fundme", deployer)


   });

   it("allows people to fund and withdraw", async function()  { 
    await fundMe.fund({value: sendValue})
    await fundMe.withdraw();
    const endingBalance = await fundMe.provider.getBalance(fundMe.address);

    assert.equal(endingBalance.toString(), 0)

   })

  
}) 