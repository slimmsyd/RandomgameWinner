const {ethers} = require("hardhat");

async function main() { 

    const greeter = await ethers.getContractFactory("simpleContract"); 
    const deployContract = await greeter .deploy();

    console.log(
        "Contract address located at",
        deployContract.address
    );
};

main()
    .then(() => process.exit(0))
    .catch((error) => { 
        console.error(error)
    })
        