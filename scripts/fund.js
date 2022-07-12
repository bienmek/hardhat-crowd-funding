const { getNamedAccounts, ethers } = require("hardhat")

async function main () {
    console.log("Funding Contract...")
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    const txResponse = await fundMe.fund({ value: ethers.utils.parseEther("1")})
    await txResponse.wait(1)
    console.log("Contract Funded !")

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })