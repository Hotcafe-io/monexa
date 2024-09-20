// components/TokenTracker.js
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AlertTriangleIcon,
  BarChart3Icon,
  SortAscIcon,
  SortDescIcon,
  TrendingUpIcon,
} from 'lucide-react'

import Header from '../Header'

import MigratedTokensMarquee from '../MigratedTokensMarquee'
import TokenCard from '../TokenCard'
import TokenModal from '../TokenModal'

// Import the data arrays from the data folder
import initialTokens from '../../data/tokens'
import migratedTokens from '../../data/migratedTokens'

export default function TokenTracker() {
  const [currentDate, setCurrentDate] = useState('')
  const [tokens, setTokens] = useState(initialTokens)
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('variation')
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
    setTokens(
      tokens.map((token) =>
        token.id === id ? { ...token, upvotes: token.upvotes + 1 } : token
      )
    )
  }

  const filteredTokens = tokens.filter((token) => {
    if (filter === 'all') return true
    if (filter === 'blocked') return token.blocked
    if (filter === 'unblocked') return !token.blocked
    return true
  })

  const sortedTokens = [...filteredTokens].sort((a, b) => {
    const compareValues = (field, order = 'asc') => {
      if (typeof a[field] === 'number' && typeof b[field] === 'number') {
        return order === 'asc' ? a[field] - b[field] : b[field] - a[field]
      } else {
        // For fields like marketCap, convert to numbers
        const parseValue = (val) => {
          if (typeof val === 'string') {
            let num = parseFloat(val.replace(/[^0-9.]/g, ''))
            if (val.includes('B')) num *= 1e9
            else if (val.includes('M')) num *= 1e6
            return num
          }
          return val
        }
        return order === 'asc'
          ? parseValue(a[field]) - parseValue(b[field])
          : parseValue(b[field]) - parseValue(a[field])
      }
    }

    return compareValues(sortBy, sortOrder)
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
    <>
      <Header
        currentDate={currentDate}
        title="Monexa Token Tracker"
        subtitle="Top 10 Tokens by Variation"
        marketInfoCards={[
          {
            icon: <BarChart3Icon className="w-4 h-4 text-[#40E0D0]" />,
            title: 'Market Cap',
            value: '$1.23T',
            change: '+5.4%',
          },
          {
            icon: <TrendingUpIcon className="w-4 h-4 text-[#40E0D0]" />,
            title: '24h Volume',
            value: '$78.9B',
            change: '+12.7%',
          },
          {
            icon: <AlertTriangleIcon className="w-4 h-4 text-[#40E0D0]" />,
            title: 'Volatility',
            value: 'High',
            change: '+2.1',
          },
        ]}
      />

      <MigratedTokensMarquee tokens={migratedTokens} />

      <main>
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <label htmlFor="filter" className="text-[#40E0D0] text-sm">
              Filter:
            </label>
            <select
              id="filter"
              className="bg-gray-800 text-white rounded px-2 py-1 text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Tokens</option>
              <option value="blocked">Blocked</option>
              <option value="unblocked">Unblocked</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="text-[#8A2BE2] text-sm">
              Sort by:
            </label>
            <select
              id="sort"
              className="bg-gray-800 text-white rounded px-2 py-1 text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="variation">Variation</option>
              <option value="upvotes">Upvotes</option>
              <option value="marketCap">Market Cap</option>
            </select>
            <button
              onClick={toggleSortOrder}
              className="bg-gray-800 text-white rounded p-1"
            >
              {sortOrder === 'asc' ? (
                <SortAscIcon className="w-4 h-4" />
              ) : (
                <SortDescIcon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
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

      {/* Token Modal */}
      <AnimatePresence>
        {selectedToken && (
          <TokenModal token={selectedToken} onClose={handleCloseModal} />
        )}
      </AnimatePresence>

    </>
  )
}
