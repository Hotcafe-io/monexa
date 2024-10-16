// components/Header.js
import React from 'react'
import { motion } from 'framer-motion'
import MonexaLogo from './MonexaLogo'
import MarketInfoCard from './MarketInfoCard'

const Header = ({ currentDate, title, subtitle, marketInfoCards }) => {

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <div className="bg-gradient-to-r from-[#40E0D0] via-[#8A2BE2] to-[#40E0D0] rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative p-4">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0 bg-black"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />
          </div>

          {/* Header content */}
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:justify-between  mb-2">
              <div className="flex items-center">
                <MonexaLogo />
                <motion.h1
                  className="text-3xl md:text-4xl font-bold text-white ml-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {title}
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
              {subtitle}
            </motion.p>
            <div className="grid grid-cols-3 gap-2">
              {marketInfoCards.map((card, index) => (
                <MarketInfoCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  value={card.value}
                  change={card.change}
                />
              ))}
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

export default Header
