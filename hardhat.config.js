require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
};

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  scripts: {
    deploy: "scripts/deploy.js",
  },
};
