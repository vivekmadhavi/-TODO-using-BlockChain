import React from 'react'
import PropTypes from 'prop-types';
import Web3 from 'web3';
import ABI from "./ABI.json"
import { useNavigate } from 'react-router-dom';
const Wallet = ({saveState}) => {
  const navigateTo = useNavigate();

  const connectWallet = async () => {

    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const account = await window.ethereum.request({
          method:"eth_requestAccounts"
        })
        const contractAddress = "0xd3e09df7ad691fef37a7d9b004898116abc4d305";
        const contract = new web3.eth.Contract(ABI, contractAddress)
        saveState({web3:web3,contract:contract,account:account[0]})
        navigateTo("view-all-tasks")
    }else{
      throw new Error
    }
    } catch (error){
      console.log(error)
    }

  }
  return (
    <>
      <button onClick={connectWallet }>click</button>
    </>
  )
}
Wallet.PropTypes = {
  saveState: PropTypes.func.isRequired,
}

export default Wallet
