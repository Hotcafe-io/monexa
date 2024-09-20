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
            <div className="container xl:!max-w-[1900px] mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center hover:scale-105 active:scale-100 duration-150">
                    <MonexaLogo />
                    <span className="ml-2 text-2xl font-bold ">Monexa</span>
                </Link>
                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-4">
                    {mainNavigation.map((item, index) => (
                        <a key={index} href={item.href} className="hover:text-[#40E0D0]">
                            {item.name}
                        </a>
                    ))}
                </div>
                {/* Mobile Menu Button */}
                <motion.button
                    className="lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
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
                        className="lg:hidden bg-gray-800"
                    >
                        <div className="px-4 py-2 space-y-2">
                            {mainNavigation.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="block hover:text-[#40E0D0]"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
