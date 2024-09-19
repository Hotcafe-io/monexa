"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpIcon, ArrowDownIcon, BarChart3Icon, TrendingUpIcon, AlertTriangleIcon, Users2Icon, CoinsIcon, LinkIcon, MenuIcon, XIcon, ZapIcon, GlobeIcon, DollarSignIcon, ThumbsUpIcon, FilterIcon, SortAscIcon, SortDescIcon, TwitterIcon, GithubIcon, ShoppingCartIcon } from 'lucide-react'

// Extended mock data for demonstration (only high-trust, high market cap tokens)
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

const MonexaLogo = () => (
  <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="120" height="120" fill="#40E0D0" transform="rotate(-15 20 60)" />
    <rect x="80" y="20" width="120" height="120" fill="#8A2BE2" transform="rotate(15 80 20)" />
  </svg>
)

const Header = ({ currentDate }) => {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <div className="bg-gradient-to-r from-[#40E0D0] via-[#8A2BE2] to-[#40E0D0] rounded-lg shadow-2xl overflow-hidden">
        <div className="relative p-4">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-black" 
                 style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} 
            />
          </div>

          {/* Glitch effect */}
          <AnimatePresence>
            {isGlitching && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0 bg-[#40E0D0] mix-blend-screen"
                style={{ clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)" }}
              />
            )}
          </AnimatePresence>

          {/* Header content */}
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-2">
              <div className="flex items-center">
                <MonexaLogo />
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold text-white ml-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Monexa Trusted
                </motion.h1>
              </div>
              <div className="text-right text-xs">
                <p className="text-white">{currentDate}</p>
                <p className="text-white">Last updated: 5 minutes ago</p>
              </div>
            </div>
            <motion.p 
              className="text-lg mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Top Trusted Tokens by Market Cap
            </motion.p>
            <div className="grid grid-cols-3 gap-2">
              <MarketInfoCard 
                icon={<BarChart3Icon className="w-4 h-4 text-[#40E0D0]" />}
                title="Total Trusted Market Cap"
                value="$11.6B"
                change="+7.2%"
              />
              <MarketInfoCard 
                icon={<TrendingUpIcon className="w-4 h-4 text-[#40E0D0]" />}
                title="24h Trusted Volume"
                value="$2.84B"
                change="+15.3%"
              />
              <MarketInfoCard 
                icon={<AlertTriangleIcon className="w-4 h-4 text-[#40E0D0]" />}
                title="Trust Score"
                value="High"
                change="+1.8"
              />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#40E0D0] rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#8A2BE2] rounded-br-3xl" />
        </div>
      </div>
    </motion.header>
  )
}

const MarketInfoCard = ({ icon, title, value, change }) => (
  <motion.div 
    className="bg-white bg-opacity-10 rounded-lg p-2 backdrop-filter backdrop-blur-sm"
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(64, 224, 208, 0.3)" }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {icon}
        <div className="ml-2">
          <p className="text-xs text-[#40E0D0]">{title}</p>
          <p className="text-sm font-semibold text-white">{value}</p>
        </div>
      </div>
      <div className={`text-xs ${change.startsWith('+') ? 'text-[#40E0D0]' : 'text-[#FF6B6B]'}`}>
        {change}
      </div>
    </div>
  </motion.div>
)

const TokenCard = ({ token, onUpvote, onClick }) => (
  <motion.li
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    whileHover={{ scale: 1.02 }}
    className="list-none relative overflow-hidden rounded-lg shadow-lg bg-[#40E0D0] bg-opacity-20 cursor-pointer"
    onClick={() => onClick(token)}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black to-transparent opacity-10" style={{ backgroundSize: '200% 200%', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)' }}></div>
    
    <div className="relative p-3 backdrop-blur-sm backdrop-filter">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-2xl mr-2">{token.icon}</span>
          <div>
            <span className="text-lg font-bold text-white">{token.name}</span>
            <span className="text-xs text-[#40E0D0] ml-1">({token.symbol})</span>
          </div>
        </div>
        <motion.span
          className="text-sm font-semibold text-[#40E0D0]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ArrowUpIcon className="inline mr-1 w-3 h-3" />
          {Math.abs(token.variation)}%
        </motion.span>
      </div>
      <div className="grid grid-cols-2 gap-1 text-xs mb-2">
        <div className="flex items-center">
          <CoinsIcon className="w-3 h-3 mr-1 text-[#40E0D0]" />
          <span className="text-white">Vol: {token.volume}</span>
        </div>
        <div className="flex items-center">
          <Users2Icon className="w-3 h-3 mr-1 text-[#8A2BE2]" />
          <span className="text-white">Holders: {token.holders}</span>
        </div>
        <div className="flex items-center">
          <BarChart3Icon className="w-3 h-3 mr-1 text-[#FFD700]" />
          <span className="text-white">MCap: ${token.marketCap}</span>
        </div>
        <div className="flex items-center">
          <TrendingUpIcon className="w-3 h-3 mr-1 text-[#40E0D0]" />
          <span className="text-white">Price: ${token.currentPrice}</span>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs">
        <div className="flex items-center">
          <LinkIcon className="w-3 h-3 mr-1 text-[#8A2BE2]" />
          <span className="text-white">{token.chain}</span>
        </div>
        <motion.span
          className="px-2 py-1 rounded text-xs bg-[#40E0D0] text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Trusted
        </motion.span>
      </div>
      <div className="flex justify-between mt-2">
        <motion.button
          className="flex-1 mr-1 bg-[#40E0D0] hover:bg-[#30C0B0] text-white font-bold py-1 px-2 rounded text-xs flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            onUpvote(token.id);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ThumbsUpIcon className="w-3 h-3 mr-1" />
          Upvote ({token.upvotes})
        </motion.button>
        <motion.button
          className="flex-1 ml-1 bg-[#8A2BE2] hover:bg-[#7A1BD2] text-white font-bold py-1 px-2 rounded text-xs flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            // Add buy functionality here
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCartIcon className="w-3 h-3 mr-1" />
          Quick Buy
        </motion.button>
      </div>
    </div>
  </motion.li>
)

const TokenModal = ({ token, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.8, y: 50 }}
      className="bg-gray-900 p-4 rounded-lg shadow-xl max-w-md w-full mx-4 overflow-y-auto max-h-[90vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-3xl mr-2">{token.icon}</span>
          <h2 className="text-2xl font-bold text-[#40E0D0]">{token.name} <span className="text-sm text-gray-400">({token.symbol})</span></h2>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <XIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-sm font-semibold text-[#40E0D0] mb-1">Current Price</h4>
          <p className="text-lg font-bold text-white">${token.currentPrice}</p>
        </div>
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-sm font-semibold text-[#8A2BE2] mb-1">24h Change</h4>
          <p className="text-lg font-bold text-[#40E0D0]">
            +{token.variation}%
          </p>
        </div>
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-sm font-semibold text-[#FFD700] mb-1">Market Cap</h4>
          <p className="text-lg font-bold text-white">${token.marketCap}</p>
        </div>
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-sm font-semibold text-[#FF6B6B] mb-1">24h Volume</h4>
          <p className="text-lg font-bold text-white">{token.volume}</p>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[#40E0D0] mb-2">Recent Transactions</h3>
        <ul className="space-y-1">
          {token.transactions.map((tx, index) => (
            <li key={index} className="bg-white bg-opacity-10 p-2 rounded text-xs flex justify-between">
              <span className={tx.type === 'Buy' ? 'text-[#40E0D0]' : 'text-[#FF6B6B]'}>{tx.type}</span>
              <span className="text-white">{tx.amount} @ ${tx.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[#8A2BE2] mb-2">Top Holders</h3>
        <ul className="space-y-1">
          {token.topHolders.map((holder, index) => (
            <li key={index} className="bg-white bg-opacity-10 p-2 rounded text-xs flex justify-between">
              <span className="text-gray-300">{holder.address}</span>
              <span className="text-[#40E0D0]">{holder.percentage}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-xs font-semibold text-[#40E0D0] mb-1">Dev Holdings</h4>
          <p className="text-sm font-bold text-white">{token.devHoldings}</p>
        </div>
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-xs font-semibold text-[#8A2BE2] mb-1">Snipers</h4>
          <p className="text-sm font-bold text-white">{token.snipers}</p>
        </div>
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-xs font-semibold text-[#FFD700] mb-1">Snipers Holding</h4>
          <p className="text-sm font-bold text-white">{token.snipersHoldingPercentage}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <a href={token.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-[#40E0D0] hover:text-[#30C0B0]">
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a href={token.socials.github} target="_blank" rel="noopener noreferrer" className="text-[#8A2BE2] hover:text-[#7A1BD2]">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={token.socials.website} target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:text-[#EFC700]">
            <GlobeIcon className="w-5 h-5" />
          </a>
        </div>
        <motion.button
          className="bg-[#8A2BE2] hover:bg-[#7A1BD2] text-white font-bold py-2 px-4 rounded text-sm flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCartIcon className="w-4 h-4 mr-2" />
          Quick Buy
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
)

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
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <div className="container mx-auto px-4 py-6">
        <Header currentDate={currentDate} />

        <main>
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

        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 Monexa Trusted. All rights reserved.</p>
        </footer>
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