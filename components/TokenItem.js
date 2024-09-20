// components/TokenItem.js
import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { formatMarketCap } from '../utils/formatMarketCap'

const TokenItem = ({ token }) => {
  const IconComponent = Icons[token.icon] || Icons.DollarSignIcon

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
            {token.variation > 0 ? (
              <Icons.ArrowUpIcon className="inline w-3 h-3 mr-1" />
            ) : (
              <Icons.ArrowDownIcon className="inline w-3 h-3 mr-1" />
            )}
            {Math.abs(token.variation).toFixed(2)}%
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default TokenItem
