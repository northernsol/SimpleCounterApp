async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const counterAppFactory = await ethers.getContractFactory("CounterApp");
  const counterApp = await counterAppFactory.deploy();
  await counterApp.deployed();

  console.log("Contract deployed to:", counterApp.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
