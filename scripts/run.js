const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("BenjSmarContract");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  // let waveCount;
  // waveCount = await waveContract.getTotalWaves({ gasLimit:300000 });

  // let waveTxn = await waveContract.wave("hello", { gasLimit:300000 });
  // await waveTxn.wait();

  // waveCount = await waveContract.getTotalWaves({ gasLimit:300000 });

  // waveTxn = await waveContract.connect(randomPerson).wave("hello", { gasLimit:300000 });
  // await waveTxn.wait();

  // waveCount = await waveContract.getTotalWaves({ gasLimit:300000 });
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();