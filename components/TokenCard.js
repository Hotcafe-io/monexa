// components/TokenCard.js
import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpIcon,
  ArrowDownIcon,
  BarChart3Icon,
  TrendingUpIcon,
  AlertTriangleIcon,
  Users2Icon,
  CoinsIcon,
  LinkIcon,
  ThumbsUpIcon,
  ShoppingCartIcon,
} from 'lucide-react'

/** @typedef {import('../types/index').Token} Token */

/**
 * @param {Object} props
 * @param {Token} props.token
 * @param {(id: number) => void} props.onUpvote
 * @param {(token: Token) => void} props.onClick
 */
const TokenCard = ({ token, onUpvote, onClick }) => (
  <motion.li
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    whileHover={{ scale: 1.02 }}
    className={`relative overflow-hidden rounded-lg shadow-lg list-none ${token.blocked
        ? 'bg-gray-800'
        : token.status === 'green'
          ? 'bg-[#40E0D0] bg-opacity-20'
          : token.status === 'yellow'
            ? 'bg-[#FFD700] bg-opacity-20'
            : 'bg-[#FF6B6B] bg-opacity-20'
      } cursor-pointer`}
    onClick={() => onClick(token)}
  >
    <div
      className="absolute inset-0 bg-gradient-to-br from-transparent via-black to-transparent opacity-10"
      style={{
        backgroundSize: '200% 200%',
        backgroundImage:
          'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)',
      }}
    ></div>

    <div className="relative p-3 backdrop-blur-sm backdrop-filter">
      {token.blocked ? (
        <div className="flex flex-col items-center justify-center h-full">
          <AlertTriangleIcon className="w-12 h-12 text-[#FFD700] mb-2" />
          <h3 className="text-xl font-bold text-[#FFD700] mb-1">
            Blocked by Monexa AI
          </h3>
          <p className="text-white text-center text-sm">
            This token has been flagged for potential risks.
          </p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <span className="text-2xl mr-2">{token.icon}</span>
              <div>
                <span className="text-lg font-bold text-white">
                  {token.name}
                </span>
                <span className="text-xs text-[#40E0D0] ml-1">
                  ({token.symbol})
                </span>
              </div>
            </div>
            <motion.span
              className={`text-sm font-semibold ${token.variation > 0 ? 'text-[#40E0D0]' : 'text-[#FF6B6B]'
                }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {token.variation > 0 ? (
                <ArrowUpIcon className="inline mr-1 w-3 h-3" />
              ) : (
                <ArrowDownIcon className="inline mr-1 w-3 h-3" />
              )}
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
              <span className="text-white">
                Price: ${token.currentPrice}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center">
              <LinkIcon className="w-3 h-3 mr-1 text-[#8A2BE2]" />
              <span className="text-white">{token.chain}</span>
            </div>
            <motion.span
              className={`px-2 py-1 rounded text-xs ${token.status === 'green'
                  ? 'bg-[#40E0D0] text-white'
                  : token.status === 'yellow'
                    ? 'bg-[#FFD700] text-gray-800'
                    : 'bg-[#FF6B6B] text-white'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {token.status === 'green'
                ? 'Recommended'
                : token.status === 'yellow'
                  ? 'Neutral'
                  : 'Not Recommended'}
            </motion.span>
          </div>
        </>
      )}
      <div className="flex justify-between mt-2">
        <motion.button
          className="flex-1 mr-1 bg-[#40E0D0] hover:bg-[#30C0B0] text-white font-bold py-1 px-2 rounded text-xs flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation()
            onUpvote(token.id)
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
            e.stopPropagation()
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

export default TokenCard
