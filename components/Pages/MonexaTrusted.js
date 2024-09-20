"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SortAscIcon,
  SortDescIcon,
  XIcon,
  MenuIcon,
  BarChart3Icon,
  TrendingUpIcon,
  AlertTriangleIcon,

} from 'lucide-react'
import Header from '../Header'

import TokenCard from '../TokenCard'
import TokenModal from '../TokenModal'


const trustedTokens = [
  { 
    id: 1, 
    name: 'MonexaCoin', 
    symbol: 'MXC',
    icon: '💎',
    variation: 15.2, 
    status: 'green', 
    volume: '1.2B', 
    holders: '125K', 
    marketCap: '5.6B', 
    currentPrice: '0.00123', 
    chain: 'Ethereum', 
    upvotes: 1250, 
    blocked: false,
    transactions: [
      { type: 'Buy', amount: '100,000', price: '0.00120' },
      { type: 'Sell', amount: '50,000', price: '0.00125' },
      { type: 'Buy', amount: '75,000', price: '0.00122' },
    ],
    topHolders: [
      { address: '0x1234...5678', percentage: '5.2%' },
      { address: '0x2345...6789', percentage: '4.8%' },
      { address: '0x3456...7890', percentage: '4.3%' },
    ],
    devHoldings: '2.5%',
    snipers: 15,
    snipersHoldingPercentage: '8.7%',
    socials: {
      twitter: 'https://twitter.com/monexacoin',
      github: 'https://github.com/monexacoin',
      website: 'https://monexacoin.io'
    }
  },
  { 
    id: 2, 
    name: 'NexaToken', 
    symbol: 'NXT',
    icon: '🔷',
    variation: 12.3, 
    status: 'green', 
    volume: '890M', 
    holders: '78K', 
    marketCap: '3.2B', 
    currentPrice: '0.00085', 
    chain: 'Binance', 
    upvotes: 980, 
    blocked: false,
    transactions: [
      { type: 'Buy', amount: '200,000', price: '0.00083' },
      { type: 'Buy', amount: '150,000', price: '0.00084' },
      { type: 'Sell', amount: '100,000', price: '0.00086' },
    ],
    topHolders: [
      { address: '0x4567...8901', percentage: '6.1%' },
      { address: '0x5678...9012', percentage: '5.5%' },
      { address: '0x6789...0123', percentage: '5.0%' },
    ],
    devHoldings: '3.2%',
    snipers: 8,
    snipersHoldingPercentage: '5.4%',
    socials: {
      twitter: 'https://twitter.com/nexatoken',
      github: 'https://github.com/nexatoken',
      website: 'https://nexatoken.io'
    }
  },
  { 
    id: 3, 
    name: 'CryptoFlow', 
    symbol: 'CFT',
    icon: '🌊',
    variation: 8.7, 
    status: 'green', 
    volume: '750M', 
    holders: '62K', 
    marketCap: '2.8B', 
    currentPrice: '0.00072', 
    chain: 'Polygon', 
    upvotes: 850, 
    blocked: false,
    transactions: [
      { type: 'Buy', amount: '180,000', price: '0.00070' },
      { type: 'Sell', amount: '90,000', price: '0.00073' },
      { type: 'Buy', amount: '120,000', price: '0.00071' },
    ],
    topHolders: [
      { address: '0x7890...1234', percentage: '5.8%' },
      { address: '0x8901...2345', percentage: '5.2%' },
      { address: '0x9012...3456', percentage: '4.7%' },
    ],
    devHoldings: '2.8%',
    snipers: 10,
    snipersHoldingPercentage: '6.2%',
    socials: {
      twitter: 'https://twitter.com/cryptoflow',
      github: 'https://github.com/cryptoflow',
      website: 'https://cryptoflow.io'
    }
  },
]


export default function MonexaTrusted() {
  const [currentDate, setCurrentDate] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [tokens, setTokens] = useState(trustedTokens)
  const [sortBy, setSortBy] = useState('marketCap')
  const [sortOrder, setSortOrder] = useState('desc')
  const [selectedToken, setSelectedToken] = useState(null)

  useEffect(() => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    setCurrentDate(date)
  }, [])

  const handleUpvote = (id) => {
    setTokens(tokens.map(token =>
      token.id === id ? { ...token, upvotes: token.upvotes + 1 } : token
    ))
  }

  const sortedTokens = [...tokens].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] - b[sortBy]
    } else {
      return b[sortBy] - a[sortBy]
    }
  })

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  const handleTokenClick = (token) => {
    setSelectedToken(token)
  }

  const handleCloseModal = () => {
    setSelectedToken(null)
  }

  return (
    <div className="bg-gray-900 text-gray-100 font-mono">
      <div className="container xl:max-w-[1900px] mx-auto py-6">
        {/* Reusable Header component */}
        <Header
          currentDate={currentDate}
          title="Monexa Trusted"
          subtitle="Top Trusted Tokens by Market Cap"
          marketInfoCards={[
            {
              icon: <BarChart3Icon className="w-4 h-4 text-[#40E0D0]" />,
              title: 'Total Trusted Market Cap',
              value: '$11.6B',
              change: '+7.2%',
            },
            {
              icon: <TrendingUpIcon className="w-4 h-4 text-[#40E0D0]" />,
              title: '24h Trusted Volume',
              value: '$2.84B',
              change: '+15.3%',
            },
            {
              icon: <AlertTriangleIcon className="w-4 h-4 text-[#40E0D0]" />,
              title: 'Trust Score',
              value: 'High',
              change: '+1.8',
            },
          ]}
        />

        <main>
          {/* Sort and Filter */}
          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="sort" className="text-[#8A2BE2] text-sm">Sort by:</label>
              <select
                id="sort"
                className="bg-gray-800 text-white rounded px-2 py-1 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="marketCap">Market Cap</option>
                <option value="variation">Variation</option>
                <option value="upvotes">Upvotes</option>
              </select>
              <button
                onClick={toggleSortOrder}
                className="bg-gray-800 text-white rounded p-1"
              >
                {sortOrder === 'asc' ? <SortAscIcon className="w-4 h-4" /> : <SortDescIcon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Tokens List */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {sortedTokens.map((token) => (
                <TokenCard
                  key={token.id}
                  token={token}
                  onUpvote={handleUpvote}
                  onClick={handleTokenClick}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </main>

      </div>

      {/* Monexa decorative elements */}
      <div className="fixed top-0 left-0 w-1 h-screen bg-gradient-to-b from-[#40E0D0] to-[#8A2BE2]"></div>
      <div className="fixed top-0 right-0 w-1 h-screen bg-gradient-to-b from-[#8A2BE2] to-[#40E0D0]"></div>
      <div className="fixed bottom-0 left-0 w-screen h-1 bg-gradient-to-r from-[#40E0D0] via-[#8A2BE2] to-[#40E0D0]"></div>

      {/* Mobile menu button */}
      <motion.button
        className="fixed top-4 right-4 z-50 lg:hidden bg-gray-800 p-2 rounded-full"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMenuOpen ? <XIcon className="w-6 h-6 text-[#40E0D0]" /> : <MenuIcon className="w-6 h-6 text-[#40E0D0]" />}
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-64 bg-gray-800 shadow-lg z-40 lg:hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#40E0D0] mb-4">Menu</h2>
              <ul className="space-y-2">
                <li><a href="#" className="block py-2 text-gray-300 hover:text-[#40E0D0] transition-colors">Home</a></li>
                <li><a href="#" className="block py-2 text-gray-300 hover:text-[#40E0D0] transition-colors">Trusted Tokens</a></li>
                <li><a href="#" className="block py-2 text-gray-300 hover:text-[#40E0D0] transition-colors">Market Analysis</a></li>
                <li><a href="#" className="block py-2 text-gray-300 hover:text-[#40E0D0] transition-colors">Contact</a></li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Token Modal */}
      <AnimatePresence>
        {selectedToken && (
          <TokenModal token={selectedToken} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  )
}
