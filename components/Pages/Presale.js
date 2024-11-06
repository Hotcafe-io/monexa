'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUp, Coins, Wallet, Shield, Lock, Award, Twitter, MessageCircle, Send, UserPlus, AlertTriangle } from 'lucide-react'

export default function TokenPresale() {
  const [amount, setAmount] = useState('')
  const [walletConnected, setWalletConnected] = useState(false)
  const [referralEmail, setReferralEmail] = useState('')
  const [purchaseToken, setPurchaseToken] = useState('USDC')
  const [referralCode, setReferralCode] = useState('')
  const [chainId, setChainId] = useState(null)

  const tokenName = "MoneXa"
  const tokenSymbol = "MXA"
  const tokenPrice = 0.00156
  const maxTokens = 1000000
  const soldTokens = 450000
  const progress = (soldTokens / maxTokens) * 100

  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' })
        if (accounts.length > 0) {
          setWalletConnected(true)
          const chainId = await window.ethereum.request({ method: 'eth_chainId' })
          setChainId(chainId)
        }
      } catch (error) {
        console.error("An error occurred while checking the connection:", error)
      }
    }
  }

  const handleConnectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        setWalletConnected(true)
        const chainId = await window.ethereum.request({ method: 'eth_chainId' })
        setChainId(chainId)
      } catch (error) {
        console.error("An error occurred while connecting the wallet:", error)
      }
    } else {
      alert('Please install MetaMask or another Web3 wallet to connect.')
    }
  }

  const switchToBinanceChain = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x38' }], // 0x38 is the chainId for Binance Smart Chain
        })
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0x38',
                chainName: 'Binance Smart Chain',
                nativeCurrency: {
                  name: 'BNB',
                  symbol: 'BNB',
                  decimals: 18
                },
                rpcUrls: ['https://bsc-dataseed.binance.org/'],
                blockExplorerUrls: ['https://bscscan.com/']
              }],
            })
          } catch (addError) {
            console.error("An error occurred while adding the Binance Smart Chain:", addError)
          }
        }
      }
    }
  }

  const handlePurchase = async (e) => {
    e.preventDefault()
    if (!walletConnected) {
      alert('Please connect your wallet first!')
      return
    }
    if (chainId !== '0x38') {
      alert('Please switch to the Binance Smart Chain before making a purchase.')
      await switchToBinanceChain()
      return
    }
    // Placeholder: Here you would integrate with a smart contract to handle the purchase
    alert(`Purchase of ${amount} ${purchaseToken} worth of ${tokenSymbol} initiated! Referral Code: ${referralCode || 'None'}`)
  }

  const handleReferral = (e) => {
    e.preventDefault()
    // Placeholder: Here you would handle the referral process
    alert(`Referral invitation sent to ${referralEmail}`)
    setReferralEmail('')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            {tokenName} Token Presale
          </h1>
          <button
            onClick={handleConnectWallet}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center"
          >
            <Wallet className="mr-2 h-5 w-5" />
            {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
          </button>
        </header>
        {chainId && chainId !== '0x38' && (
          <div className="bg-yellow-900 text-yellow-100 p-4 rounded-md mb-6 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            <span>Please switch to the Binance Smart Chain to participate in the presale.</span>
            <button
              onClick={switchToBinanceChain}
              className="ml-auto bg-yellow-800 hover:bg-yellow-700 text-yellow-100 py-1 px-3 rounded-md transition-colors duration-200"
            >
              Switch Network
            </button>
          </div>
        )}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-semibold">{tokenName}</h2>
              <p className="text-gray-400">{tokenSymbol}</p>
            </div>
            <div className="text-lg font-bold text-green-400">
              Presale Live <ArrowUp className="inline ml-1 w-4 h-4" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <p className="text-gray-400">Price</p>
              <p className="font-medium">${tokenPrice.toFixed(5)}</p>
            </div>
            <div>
              <p className="text-gray-400">Total Supply</p>
              <p className="font-medium">{maxTokens.toLocaleString()} {tokenSymbol}</p>
            </div>
            <div>
              <p className="text-gray-400">Tokens Sold</p>
              <p className="font-medium">{soldTokens.toLocaleString()} {tokenSymbol}</p>
            </div>
            <div>
              <p className="text-gray-400">Progress</p>
              <p className="font-medium">{progress.toFixed(2)}%</p>
            </div>
          </div>
          <div className="mb-6 bg-gray-700 rounded-full h-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-400 to-blue-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <form onSubmit={handlePurchase} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Select payment token
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setPurchaseToken('BNB')}
                  className={`flex-1 py-2 px-4 rounded-md transition-colors duration-200 ${
                    purchaseToken === 'BNB'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  BNB
                </button>
                <button
                  type="button"
                  onClick={() => setPurchaseToken('USDC')}
                  className={`flex-1 py-2 px-4 rounded-md transition-colors duration-200 ${
                    purchaseToken === 'USDC'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  USDC
                </button>
                <button
                  type="button"
                  onClick={() => setPurchaseToken('USDT')}
                  className={`flex-1 py-2 px-4 rounded-md transition-colors duration-200 ${
                    purchaseToken === 'USDT'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  USDT
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">
                Amount to purchase (in {purchaseToken})
              </label>
              <input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 border-2 border-teal-500 transition-all duration-300 hover:border-teal-400"
              />
            </div>
            <div>
              <label htmlFor="referralCode" className="block text-sm font-medium text-gray-300 mb-1">
                Referral Code (optional)
              </label>
              <input
                id="referralCode"
                type="text"
                placeholder="Enter referral code"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">
                Estimated {tokenSymbol}: <span className="font-semibold text-white">{(Number(amount) / tokenPrice).toFixed(2)}</span>
              </p>
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Coins className="mr-2 h-5 w-5" />
                Purchase Tokens
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Refer a Friend</h3>
          <p className="text-gray-400 mb-4">Earn rewards by referring your friends to our presale!</p>
          <form onSubmit={handleReferral} className="space-y-4">
            <div>
              <label htmlFor="referralEmail" className="block text-sm font-medium text-gray-300 mb-1">
                Friend's Email Address
              </label>
              <input
                id="referralEmail"
                type="email"
                placeholder="Enter email"
                value={referralEmail}
                onChange={(e) => setReferralEmail(e.target.value)}
                className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              <UserPlus className="mr-2 h-5 w-5" />
              Send Referral
            </button>
          </form>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <Shield className="text-teal-400 mr-3 h-8 w-8" />
            <div>
              <h3 className="font-semibold">Secure Platform</h3>
              <p className="text-sm text-gray-400">Your funds are safe with us</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <Lock className="text-teal-400 mr-3 h-8 w-8" />
            <div>
              <h3 className="font-semibold">Locked Liquidity</h3>
              <p className="text-sm text-gray-400">Guaranteed token liquidity</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <Award className="text-teal-400 mr-3 h-8 w-8" />
            <div>
              <h3 className="font-semibold">Audited Smart Contract</h3>
              <p className="text-sm text-gray-400">Verified by top auditors</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes highlight {
          0% {
            box-shadow: 0 0 0 0 rgba(45, 212, 191, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(45, 212, 191, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(45, 212, 191, 0);
          }
        }

        #amount, button[type="submit"] {
          animation: highlight 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}