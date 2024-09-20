// components/Navbar.js
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuIcon, XIcon } from 'lucide-react'
import MonexaLogo from '../components/MonexaLogo' // Adjusted import path
import { mainNavigation } from '../data/navigation' // Import navigation data
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white font-bold w-full sticky top-0 z-50">
      <div className="container xl:max-w-[1900px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center hover:scale-105 active:scale-100 duration-150">
          <MonexaLogo />
          <span className="ml-2 text-2xl font-bold">Monexa</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          {mainNavigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-[#40E0D0] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden bg-gray-800 p-2 rounded-full z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6 text-[#40E0D0]" />
          ) : (
            <MenuIcon className="w-6 h-6 text-[#40E0D0]" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
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
                {mainNavigation.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="block py-2 text-gray-300 hover:text-[#40E0D0] transition-colors"
                      onClick={() => setIsMenuOpen(false)} // Close menu on link click
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
