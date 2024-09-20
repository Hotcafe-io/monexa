// components/MarketcapTracker.js
'use client'

import React, { useState, useEffect } from 'react'

import { FilterIcon, SortAscIcon, SortDescIcon, BarChart3Icon, TrendingUpIcon, AlertTriangleIcon, DiamondIcon, SquareIcon, CircleIcon, TriangleIcon, HexagonIcon, OctagonIcon, StarIcon, ZapIcon, HashIcon, CoinsIcon, LinkIcon } from 'lucide-react'

import MarketCapSection from '../MarketCapSection'
import { formatMarketCap } from '../../utils/formatMarketCap'
import Header from '../Header'

const tokensData = [
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

export default function MarketcapTracker() {
  const [currentDate, setCurrentDate] = useState('')
  const [filteredTokens, setFilteredTokens] = useState(tokensData)
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
    let result = [...tokensData]

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
      <div className="container xl:max-w-[1900px] mx-auto py-6">
      <Header
          currentDate={currentDate}
          title="Monexa Marketcap Tracker"
          subtitle="Top Tokens by Market Cap"
          marketInfoCards={[
            {
              icon: <BarChart3Icon className="w-4 h-4 text-[#40E0D0]" />,
              title: 'Total Market Cap',
              value: formatMarketCap(
                tokensData.reduce((sum, token) => sum + token.marketCap, 0)
              ),
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
              title: 'Market Volatility',
              value: 'High',
              change: '+2.1',
            },
          ]}
        />

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
            {sortOrder === 'asc' ? (
              <SortAscIcon className="w-4 h-4" />
            ) : (
              <SortDescIcon className="w-4 h-4" />
            )}
          </button>
        </div>

        <main>
          {marketCapRanges.map((range) => (
            <MarketCapSection
              key={range.name}
              range={range}
              tokens={filteredTokens.filter(
                (token) => token.marketCap >= range.min && token.marketCap < range.max
              )}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
