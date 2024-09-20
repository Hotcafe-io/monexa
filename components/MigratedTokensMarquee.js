// components/MigratedTokensMarquee.js
import React from 'react'
import { motion } from 'framer-motion'

const MigratedTokensMarquee = ({ tokens }) => (
  <div className="mb-4 bg-white bg-opacity-10 p-1 rounded-lg overflow-hidden">
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
    >
      {[...tokens, ...tokens].map((token, index) => (
        <span key={index} className="mx-4 text-[#40E0D0] text-sm">
          {token} migrated
        </span>
      ))}
    </motion.div>
  </div>
)

export default MigratedTokensMarquee
