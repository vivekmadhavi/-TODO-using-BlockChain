const { Web3 } = require("web3")
const ABI = require("../ABI.json")
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/nwqaPDL7rptxjKkct5PkMpd4TxQnvOV_")
const contractAddress = "0xd3e09df7ad691fef37a7d9b004898116abc4d305";
const contract = new web3.eth.Contract(ABI, contractAddress)


module.exports={contract}