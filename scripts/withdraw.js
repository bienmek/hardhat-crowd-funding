const { getNamedAccounts, ethers } = require("hardhat")

async function main () {
    console.log("Withdrawing ...")
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    const txResponse = await fundMe.withdraw()
    await txResponse.wait(1)
    console.log("Fully withdrawn !")

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })