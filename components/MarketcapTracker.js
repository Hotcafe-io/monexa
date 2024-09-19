"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpIcon, ArrowDownIcon, BarChart3Icon, TrendingUpIcon, AlertTriangleIcon, Users2Icon, CoinsIcon, LinkIcon, MenuIcon, XIcon, FilterIcon, SortAscIcon, SortDescIcon, DiamondIcon, SquareIcon, CircleIcon, TriangleIcon, HexagonIcon, OctagonIcon, StarIcon, ZapIcon, HashIcon, DollarSignIcon } from 'lucide-react'

const tokens = [
  { name: 'MonexaCoin', symbol: 'MXC', marketCap: 5600000000, price: 0.00123, variation: 15.2, icon: DiamondIcon },
  { name: 'NexaToken', symbol: 'NXT', marketCap: 2100000000, price: 0.00045, variation: -8.7, icon: SquareIcon },
  { name: 'CryptoFlow', symbol: 'CFT', marketCap: 850000000, price: 0.00078, variation: 5.3, icon: CircleIcon },
  { name: 'QuantumBit', symbol: 'QBT', marketCap: 720000000, price: 0.00056, variation: -2.1, icon: TriangleIcon },
  { name: 'EtherPulse', symbol: 'EPL', marketCap: 450000000, price: 0.00034, variation: 7.8, icon: HexagonIcon },
  { name: 'SolarChain', symbol: 'SLC', marketCap: 320000000, price: 0.00028, variation: -4.5, icon: OctagonIcon },
  { name: 'NanoNexus', symbol: 'NNX', marketCap: 180000000, price: 0.00015, variation: 3.2, icon: StarIcon },
  { name: 'BlockWave', symbol: 'BWV', marketCap: 95000000, price: 0.00009, variation: -1.7, icon: ZapIcon },
  { name: 'CosmosCred', symbol: 'CCD', marketCap: 72000000, price: 0.00007, variation: 6.4, icon: HashIcon },
  { name: 'PixelPay', symbol: 'PXP', marketCap: 45000000, price: 0.00004, variation: -3.9, icon: CoinsIcon },
  { name: 'DataDrive', symbol: 'DDV', marketCap: 28000000, price: 0.00003, variation: 2.8, icon: BarChart3Icon },
  { name: 'EcoChain', symbol: 'ECH', marketCap: 15000000, price: 0.00002, variation: -5.6, icon: LinkIcon },
]

const marketCapRanges = [
  { name: '1B+', min: 1000000000, max: Infinity },
  { name: '500M - 1B', min: 500000000, max: 1000000000 },
  { name: '100M - 500M', min: 100000000, max: 500000000 },
  { name: '50M - 100M', min: 50000000, max: 100000000 },
  { name: '10M - 50M', min: 10000000, max: 50000000 },
]

const formatMarketCap = (marketCap) => {
  if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`
  if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`
  if (marketCap >= 1e3) return `$${(marketCap / 1e3).toFixed(2)}K`
  return `$${marketCap.toFixed(2)}`
}

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
                  Monexa Marketcap Tracker
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
              Top Tokens by Market Cap
            </motion.p>
            <div className="grid grid-cols-3 gap-2">
              <MarketInfoCard 
                icon={<BarChart3Icon className="w-4 h-4 text-[#40E0D0]" />}
                title="Total Market Cap"
                value={formatMarketCap(tokens.reduce((sum, token) => sum + token.marketCap, 0))}
                change="+5.4%"
              />
              <MarketInfoCard 
                icon={<TrendingUpIcon className="w-4 h-4 text-[#40E0D0]" />}
                title="24h Volume"
                value="$78.9B"
                change="+12.7%"
              />
              <MarketInfoCard 
                icon={<AlertTriangleIcon className="w-4 h-4 text-[#40E0D0]" />}
                title="Market Volatility"
                value="High"
                change="+2.1"
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

const TokenItem = ({ token }) => {
  const IconComponent = token.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gray-800 rounded-lg p-3 mb-2 shadow-md"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-[#40E0D0] to-[#8A2BE2] rounded-full mr-2 flex items-center justify-center text-white">
            <IconComponent className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{token.name}</h3>
            <p className="text-xs text-gray-400">{token.symbol}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-white">{formatMarketCap(token.marketCap)}</p>
          <p className={`text-xs ${token.variation > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {token.variation > 0 ? <ArrowUpIcon className="inline w-3 h-3 mr-1" /> : <ArrowDownIcon className="inline w-3 h-3 mr-1" />}
            {Math.abs(token.variation).toFixed(2)}%
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const MarketCapSection = ({ range, tokens }) => (
  <div className="mb-4">
    <h2 className="text-lg font-semibold text-[#40E0D0] mb-2">{range.name}</h2>
    <AnimatePresence>
      {tokens.map((token) => (
        <TokenItem key={token.symbol} token={token} />
      ))}
    </AnimatePresence>
  </div>
)

export default function MarketcapTracker() {
  const [currentDate, setCurrentDate] = useState('')
  const [filteredTokens, setFilteredTokens] = useState(tokens)
  const [sortCriteria, setSortCriteria] = useState('marketCap')
  const [sortOrder, setSortOrder] = useState('desc')
  const [filterCriteria, setFilterCriteria] = useState('all')

  useEffect(() => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    setCurrentDate(date)
  }, [])

  useEffect(() => {
    let result = [...tokens]

    // Apply filter
    if (filterCriteria !== 'all') {
      result = result.filter(token => {
        if (filterCriteria === 'positive') return token.variation > 0
        if (filterCriteria === 'negative') return token.variation < 0
        return true
      })
    }

    // Apply sort
    result.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortCriteria] - b[sortCriteria]
      } else {
        return b[sortCriteria] - a[sortCriteria]
      }
    })

    setFilteredTokens(result)
  }, [sortCriteria, sortOrder, filterCriteria])

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <div className="container mx-auto px-4 py-6">
        <Header currentDate={currentDate} />

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="flex items-center">
            <FilterIcon className="w-4 h-4 text-[#40E0D0] mr-1" />
            <select
              className="bg-gray-800 text-white rounded px-2 py-1 text-sm"
              value={filterCriteria}
              onChange={(e) => setFilterCriteria(e.target.value)}
            >
              <option value="all">All Tokens</option>
              <option value="positive">Positive Variation</option>
              <option value="negative">Negative Variation</option>
            </select>
          </div>
          <div className="flex items-center">
            <SortAscIcon className="w-4 h-4 text-[#8A2BE2] mr-1" />
            <select
              className="bg-gray-800 text-white rounded px-2 py-1 text-sm"
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
            >
              <option value="marketCap">Market Cap</option>
              <option value="variation">Variation</option>
              <option value="price">Price</option>
            </select>
          </div>
          <button
            onClick={toggleSortOrder}
            className="bg-gray-800 text-white rounded p-1"
          >
            {sortOrder === 'asc' ? <SortAscIcon className="w-4 h-4" /> : <SortDescIcon className="w-4 h-4" />}
          </button>
        </div>

        <main>
          {marketCapRanges.map((range) => (
            <MarketCapSection
              key={range.name}
              range={range}
              tokens={filteredTokens.filter((token) => token.marketCap >= range.min && token.marketCap < range.max)}
            />
          ))}
        </main>

        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; 2023 Monexa Marketcap Tracker. All rights reserved.</p>
        </footer>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-1 h-screen bg-gradient-to-b from-[#40E0D0] to-[#8A2BE2]"></div>
      <div className="fixed top-0 right-0 w-1 h-screen bg-gradient-to-b from-[#8A2BE2] to-[#40E0D0]"></div>
      <div className="fixed bottom-0 left-0 w-screen h-1 bg-gradient-to-r from-[#40E0D0] via-[#8A2BE2] to-[#40E0D0]"></div>
    </div>
  )
}