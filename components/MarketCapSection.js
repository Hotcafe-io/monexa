// components/MarketCapSection.js
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import TokenItem from './TokenItem'

/** @typedef {import('../types/index').Token} Token */

/**
 * @param {Object} props
 * @param {Object} props.range
 * @param {Token[]} props.tokens
 */
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

export default MarketCapSection
