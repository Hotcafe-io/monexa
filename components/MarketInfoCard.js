// components/MarketInfoCard.js
import React from 'react'
import { motion } from 'framer-motion'

/**
 * @param {Object} props
 * @param {React.ReactNode} props.icon
 * @param {string} props.title
 * @param {string} props.value
 * @param {string} props.change
 */
const MarketInfoCard = ({ icon, title, value, change }) => (
  <motion.div
    className="bg-white bg-opacity-10 rounded-lg p-2 backdrop-filter backdrop-blur-sm"
    whileHover={{
      scale: 1.05,
      boxShadow: '0 0 20px rgba(64, 224, 208, 0.3)',
    }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex flex-1 h-full md:items-center md:flex-row flex-col md:justify-between">
      <div className="flex flex-1 h-full md:items-center">
        {icon}
        <div className="ml-2">
          <p className="text-xs text-[#40E0D0]">{title}</p>
          <p className="text-sm font-semibold text-white">{value}</p>
        </div>
      </div>
      <div
        className={`md:ml-0 ml-auto mt-auto text-xs ${
          change.startsWith('+') ? 'text-[#40E0D0]' : 'text-[#FF6B6B]'
        }`}
      >
        {change}
      </div>
    </div>
  </motion.div>
)

export default MarketInfoCard
