require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path: ".env"});
const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const MUMBAI_KEY = process.env.MUMBAI_KEY;
const POLYSCAN_KEY = process.env.POLYSCAN_KEY;
module.exports = {
  solidity: "0.8.4",
  networks:  {
    mumbai: { 
      url: "https://polygon-mumbai.g.alchemy.com/v2/izVf4WKjz4tDv3hI16hGu-9UktoMuHSi",
      accounts: [MUMBAI_KEY]
    },
  },
  etherscan: { 
    apiKey: { 
      polygonMumbai: POLYSCAN_KEY
    }
  }
};
