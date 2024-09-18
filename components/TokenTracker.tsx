'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpIcon, ArrowDownIcon, BarChart3Icon, TrendingUpIcon, AlertTriangleIcon, Users2Icon, CoinsIcon, LinkIcon, MenuIcon, XIcon, GlobeIcon, ThumbsUpIcon, SortAscIcon, SortDescIcon, TwitterIcon, GithubIcon, ShoppingCartIcon } from 'lucide-react'

// Extended mock data for demonstration
const initialTokens = [
    {
      "id": 1,
      "name": "MonexaCoin",
      "symbol": "MXC",
      "icon": "💎",
      "variation": 15.2,
      "status": "green",
      "volume": "1.2B",
      "holders": "125K",
      "marketCap": "5.6B",
      "currentPrice": "0.00123",
      "chain": "Ethereum",
      "upvotes": 1250,
      "blocked": false,
      "transactions": [
        { "type": "Buy", "amount": "100,000", "price": "0.00120" },
        { "type": "Sell", "amount": "50,000", "price": "0.00125" },
        { "type": "Buy", "amount": "75,000", "price": "0.00122" }
      ],
      "topHolders": [
        { "address": "0x1234...5678", "percentage": "5.2%" },
        { "address": "0x2345...6789", "percentage": "4.8%" },
        { "address": "0x3456...7890", "percentage": "4.3%" }
      ],
      "devHoldings": "2.5%",
      "snipers": 15,
      "snipersHoldingPercentage": "8.7%",
      "socials": {
        "twitter": "https://twitter.com/monexacoin",
        "github": "https://github.com/monexacoin",
        "website": "https://monexacoin.io"
      }
    },
    {
      "id": 2,
      "name": "NexaToken",
      "symbol": "NXT",
      "icon": "🔷",
      "variation": -8.7,
      "status": "red",
      "volume": "890M",
      "holders": "78K",
      "marketCap": "2.1B",
      "currentPrice": "0.00045",
      "chain": "Binance",
      "upvotes": 980,
      "blocked": false,
      "transactions": [
        { "type": "Sell", "amount": "200,000", "price": "0.00048" },
        { "type": "Buy", "amount": "150,000", "price": "0.00044" },
        { "type": "Sell", "amount": "100,000", "price": "0.00046" }
      ],
      "topHolders": [
        { "address": "0x4567...8901", "percentage": "6.1%" },
        { "address": "0x5678...9012", "percentage": "5.5%" },
        { "address": "0x6789...0123", "percentage": "5.0%" }
      ],
      "devHoldings": "3.2%",
      "snipers": 8,
      "snipersHoldingPercentage": "5.4%",
      "socials": {
        "twitter": "https://twitter.com/nexatoken",
        "github": "https://github.com/nexatoken",
        "website": "https://nexatoken.io"
      }
    },
    {
      "id": 3,
      "name": "CryptoStar",
      "symbol": "CSTR",
      "icon": "⭐",
      "variation": 5.6,
      "status": "green",
      "volume": "450M",
      "holders": "45K",
      "marketCap": "780M",
      "currentPrice": "0.00078",
      "chain": "Polygon",
      "upvotes": 567,
      "blocked": false,
      "transactions": [
        { "type": "Buy", "amount": "80,000", "price": "0.00076" },
        { "type": "Buy", "amount": "120,000", "price": "0.00077" },
        { "type": "Sell", "amount": "30,000", "price": "0.00079" }
      ],
      "topHolders": [
        { "address": "0x7890...1234", "percentage": "4.7%" },
        { "address": "0x8901...2345", "percentage": "4.2%" },
        { "address": "0x9012...3456", "percentage": "3.9%" }
      ],
      "devHoldings": "1.8%",
      "snipers": 6,
      "snipersHoldingPercentage": "3.2%",
      "socials": {
        "twitter": "https://twitter.com/cryptostar",
        "github": "https://github.com/cryptostar",
        "website": "https://cryptostar.io"
      }
    },
    {
      "id": 4,
      "name": "LunarCoin",
      "symbol": "LUNAR",
      "icon": "🌙",
      "variation": -2.3,
      "status": "yellow",
      "volume": "320M",
      "holders": "62K",
      "marketCap": "1.5B",
      "currentPrice": "0.00098",
      "chain": "Solana",
      "upvotes": 789,
      "blocked": false,
      "transactions": [
        { "type": "Sell", "amount": "50,000", "price": "0.00100" },
        { "type": "Buy", "amount": "75,000", "price": "0.00097" },
        { "type": "Sell", "amount": "25,000", "price": "0.00099" }
      ],
      "topHolders": [
        { "address": "0x0123...4567", "percentage": "5.8%" },
        { "address": "0x1234...5678", "percentage": "5.3%" },
        { "address": "0x2345...6789", "percentage": "4.9%" }
      ],
      "devHoldings": "2.7%",
      "snipers": 10,
      "snipersHoldingPercentage": "6.5%",
      "socials": {
        "twitter": "https://twitter.com/lunarcoin",
        "github": "https://github.com/lunarcoin",
        "website": "https://lunarcoin.io"
      }
    },
    {
      "id": 5,
      "name": "BlockedToken",
      "symbol": "BLKD",
      "icon": "🚫",
      "variation": 0,
      "status": "red",
      "volume": "0",
      "holders": "0",
      "marketCap": "0",
      "currentPrice": "0",
      "chain": "Unknown",
      "upvotes": 0,
      "blocked": true,
      "transactions": [],
      "topHolders": [],
      "devHoldings": "0%",
      "snipers": 0,
      "snipersHoldingPercentage": "0%",
      "socials": {
        "twitter": "",
        "github": "",
        "website": ""
      }
    },
    {
      "id": 6,
      "name": "GreenEnergy",
      "symbol": "GREN",
      "icon": "🌿",
      "variation": 22.5,
      "status": "green",
      "volume": "750M",
      "holders": "95K",
      "marketCap": "3.2B",
      "currentPrice": "0.00156",
      "chain": "Cardano",
      "upvotes": 1560,
      "blocked": false,
      "transactions": [
        { "type": "Buy", "amount": "200,000", "price": "0.00150" },
        { "type": "Buy", "amount": "150,000", "price": "0.00154" },
        { "type": "Buy", "amount": "100,000", "price": "0.00158" }
      ],
      "topHolders": [
        { "address": "0x3456...7890", "percentage": "6.5%" },
        { "address": "0x4567...8901", "percentage": "5.9%" },
        { "address": "0x5678...9012", "percentage": "5.4%" }
      ],
      "devHoldings": "3.5%",
      "snipers": 20,
      "snipersHoldingPercentage": "10.2%",
      "socials": {
        "twitter": "https://twitter.com/greenenergy",
        "github": "https://github.com/greenenergy",
        "website": "https://greenenergy.io"
      }
    },
    {
      "id": 7,
      "name": "QuantumBit",
      "symbol": "QBIT",
      "icon": "🔬",
      "variation": -5.8,
      "status": "yellow",
      "volume": "580M",
      "holders": "72K",
      "marketCap": "1.8B",
      "currentPrice": "0.00067",
      "chain": "Avalanche",
      "upvotes": 845,
      "blocked": false,
      "transactions": [
        { "type": "Sell", "amount": "100,000", "price": "0.00070" },
        { "type": "Buy", "amount": "80,000", "price": "0.00066" },
        { "type": "Sell", "amount": "50,000", "price": "0.00068" }
      ],
      "topHolders": [
        { "address": "0x6789...0123", "percentage": "5.6%" },
        { "address": "0x7890...1234", "percentage": "5.1%" },
        { "address": "0x8901...2345", "percentage": "4.7%" }
      ],
      "devHoldings": "2.9%",
      "snipers": 12,
      "snipersHoldingPercentage": "7.8%",
      "socials": {
        "twitter": "https://twitter.com/quantumbit",
        "github": "https://github.com/quantumbit",
        "website": "https://quantumbit.io"
      }
    },
    {
      "id": 8,
      "name": "OceanToken",
      "symbol": "OCEN",
      "icon": "🌊",
      "variation": 8.9,
      "status": "green",
      "volume": "420M",
      "holders": "55K",
      "marketCap": "950M",
      "currentPrice": "0.00089",
      "chain": "Polkadot",
      "upvotes": 678,
      "blocked": false,
      "transactions": [
        { "type": "Buy", "amount": "90,000", "price": "0.00086" },
        { "type": "Buy", "amount": "110,000", "price": "0.00088" },
        { "type": "Sell", "amount": "40,000", "price": "0.00090" }
      ],
      "topHolders": [
        { "address": "0x9012...3456", "percentage": "4.9%" },
        { "address": "0x0123...4567", "percentage": "4.5%" },
        { "address": "0x1234...5678", "percentage": "4.1%" }
      ],
      "devHoldings": "2.2%",
      "snipers": 9,
      "snipersHoldingPercentage": "5.7%",
      "socials": {
        "twitter": "https://twitter.com/oceantoken",
        "github": "https://github.com/oceantoken",
        "website": "https://oceantoken.io"
      }
    },
    {
      "id": 9,
      "name": "BlockedScam",
      "symbol": "SCAM",
      "icon": "⚠️",
      "variation": 0,
      "status": "red",
      "volume": "0",
      "holders": "0",
      "marketCap": "0",
      "currentPrice": "0",
      "chain": "Unknown",
      "upvotes": 0,
      "blocked": true,
      "transactions": [],
      "topHolders": [],
      "devHoldings": "0%",
      "snipers": 0,
      "snipersHoldingPercentage": "0%",
      "socials": {
        "twitter": "",
        "github": "",
        "website": ""
      }
    },
    {
      "id": 10,
      "name": "AICoin",
      "symbol": "AIC",
      "icon": "🤖",
      "variation": 18.7,
      "status": "green",
      "volume": "980M",
      "holders": "110K",
      "marketCap": "4.5B",
      "currentPrice": "0.00210",
      "chain": "Ethereum",
      "upvotes": 2100,
      "blocked": false,
      "transactions": [
        { "type": "Buy", "amount": "250,000", "price": "0.00200" },
        { "type": "Buy", "amount": "180,000", "price": "0.00205" },
        { "type": "Buy", "amount": "120,000", "price": "0.00210" }
      ],
      "topHolders": [
        { "address": "0x2345...6789", "percentage": "7.2%" },
        { "address": "0x3456...7890", "percentage": "6.8%" },
        { "address": "0x4567...8901", "percentage": "6.3%" }
      ],
      "devHoldings": "4.1%",
      "snipers": 25,
      "snipersHoldingPercentage": "12.5%",
      "socials": {
        "twitter": "https://twitter.com/aicoin",
        "github": "https://github.com/aicoin",
        "website": "https://aicoin.io"
      }
    },
    {
      "id": 11,
      "name": "SpaceExplorer",
      "symbol": "SPEX",
      "icon": "🚀",
      "variation": -3.5,
      "status": "yellow",
      "volume": "340M",
      "holders": "48K",
      "marketCap": "720M",
      "currentPrice": "0.00056",
      "chain": "Cosmos",
      "upvotes": 520,
      "blocked": false,
      "transactions": [
        { "type": "Sell", "amount": "70,000", "price": "0.00058" },
        { "type": "Buy", "amount": "60,000", "price": "0.00055" },
        { "type": "Sell", "amount": "40,000", "price": "0.00057" }
      ],
      "topHolders": [
        { "address": "0x5678...9012", "percentage": "5.3%" },
        { "address": "0x6789...0123", "percentage": "4.9%" },
        { "address": "0x7890...1234", "percentage": "4.5%" }
      ],
      "devHoldings": "2.6%",
      "snipers": 7,
      "snipersHoldingPercentage": "4.8%",
      "socials": {
        "twitter": "https://twitter.com/spaceexplorer",
        "github": "https://github.com/spaceexplorer",
        "website": "https://spaceexplorer.io"
      }
    },
    {
      "id": 12,
      "name": "HealthChain",
      "symbol": "HLTH",
      "icon": "🏥",
      "variation": 6.2,
      "status": "green",
      "volume": "510M",
      "holders": "68K",
      "marketCap": "1.6B",
      "currentPrice": "0.00112",
      "chain": "Algorand",
      "upvotes": 890,
      "blocked": false,
      "transactions": [
        { "type": "Buy", "amount": "100,000", "price": "0.00110" },
        { "type": "Buy", "amount": "80,000", "price": "0.00111" },
        { "type": "Sell", "amount": "50,000", "price": "0.00113" }
      ],
      "topHolders": [
        { "address": "0x8901...2345", "percentage": "5.7%" },
        { "address": "0x9012...3456", "percentage": "5.2%" },
        { "address": "0x0123...4567", "percentage": "4.8%" }
      ],
      "devHoldings": "3.0%",
      "snipers": 11,
      "snipersHoldingPercentage": "6.9%",
      "socials": {
        "twitter": "https://twitter.com/healthchain",
        "github": "https://github.com/healthchain",
        "website": "https://healthchain.io"
      }
    },
    {
      "id": 13,
      "name": "EcoFriendly",
      "symbol": "ECO",
      "icon": "♻️",
      "variation": 10.5,
      "status": "green",
      "volume": "680M",
      "holders": "88K",
      "marketCap": "2.8B",
      "currentPrice": "0.00145",
      "chain": "Tezos",
      "upvotes": 1350,
      "blocked": false,
      "transactions": [
        { "type": "Buy", "amount": "150,000", "price": "0.00140" },
        { "type": "Buy", "amount": "120,000", "price": "0.00143" },
        { "type": "Buy", "amount": "90,000", "price": "0.00146" }
      ],
      "topHolders": [
        { "address": "0x1234...5678", "percentage": "6.3%" },
        { "address": "0x2345...6789", "percentage": "5.8%" },
        { "address": "0x3456...7890", "percentage": "5.4%" }
      ],
      "devHoldings": "3.3%",
      "snipers": 18,
      "snipersHoldingPercentage": "9.7%",
      "socials": {
        "twitter": "https://twitter.com/ecofriendly",
        "github": "https://github.com/ecofriendly",
        "website": "https://ecofriendly.io"
      }
    },
    {
      "id": 14,
      "name": "BlockedRug",
      "symbol": "RUG",
      "icon": "🔒",
      "variation": 0,
      "status": "red",
      "volume": "0",
      "holders": "0",
      "marketCap": "0",
      "currentPrice": "0",
      "chain": "Unknown",
      "upvotes": 0,
      "blocked": true,
      "transactions": [],
      "topHolders": [],
      "devHoldings": "0%",
      "snipers": 0,
      "snipersHoldingPercentage": "0%",
      "socials": {
        "twitter": "",
        "github": "",
        "website": ""
      }
    },
    {
      "id": 15,
      "name": "PrivacyGuard",
      "symbol": "PRIV",
      "icon": "🔐",
      "variation": -1.8,
      "status": "yellow",
      "volume": "290M",
      "holders": "42K",
      "marketCap": "850M",
      "currentPrice": "0.00078",
      "chain": "Monero",
      "upvotes": 620,
      "blocked": false,
      "transactions": [
        { "type": "Sell", "amount": "60,000", "price": "0.00080" },
        { "type": "Buy", "amount": "50,000", "price": "0.00077" },
        { "type": "Sell", "amount": "30,000", "price": "0.00079" }
      ],
      "topHolders": [
        { "address": "0x4567...8901", "percentage": "5.1%" },
        { "address": "0x5678...9012", "percentage": "4.7%" },
        { "address": "0x6789...0123", "percentage": "4.3%" }
      ],
      "devHoldings": "2.4%",
      "snipers": 8,
      "snipersHoldingPercentage": "5.2%",
      "socials": {
        "twitter": "https://twitter.com/privacyguard",
        "github": "https://github.com/privacyguard",
        "website": "https://privacyguard.io"
      }
    },
    {
      "id": 16,
      "name": "GamersDelight",
      "symbol": "GAME",
      "icon": "🎮",
      "variation": 14.3,
      "status": "green",
      "volume": "820M",
      "holders": "105K",
      "marketCap": "3.5B",
      "currentPrice": "0.00189",
      "chain": "Enjin",
      "upvotes": 1780,
      "blocked": false,
      "transactions": [
        { "type": "Buy", "amount": "180,000", "price": "0.00185" },
        { "type": "Buy", "amount": "150,000", "price": "0.00187" },
        { "type": "Buy", "amount": "120,000", "price": "0.00190" }
      ],
      "topHolders": [
        { "address": "0x7890...1234", "percentage": "6.8%" },
        { "address": "0x8901...2345", "percentage": "6.3%" },
        { "address": "0x9012...3456", "percentage": "5.9%" }
      ],
      "devHoldings": "3.7%",
      "snipers": 22,
      "snipersHoldingPercentage": "11.5%",
      "socials": {
        "twitter": "https://twitter.com/gamersdelight",
        "github": "https://github.com/gamersdelight",
        "website": "https://gamersdelight.io"
      }
    },
    {
      "id": 17,
      "name": "ArtBlock",
      "symbol": "ARTB",
      "icon": "🎨",
      "variation": 7.8,
      "status": "green",
      "volume": "380M",
      "holders": "58K",
      "marketCap": "1.2B",
      "currentPrice": "0.00102",
      "chain": "Flow",
      "upvotes": 920,
      "blocked": false,
      "transactions": [
        { "type": "Buy", "amount": "90,000", "price": "0.00100" },
        { "type": "Buy", "amount": "70,000", "price": "0.00101" },
        { "type": "Sell", "amount": "40,000", "price": "0.00103" }
      ],
      "topHolders": [
        { "address": "0x0123...4567", "percentage": "5.5%" },
        { "address": "0x1234...5678", "percentage": "5.0%" },
        { "address": "0x2345...6789", "percentage": "4.6%" }
      ],
      "devHoldings": "2.8%",
      "snipers": 13,
      "snipersHoldingPercentage": "7.2%",
      "socials": {
        "twitter": "https://twitter.com/artblock",
        "github": "https://github.com/artblock",
        "website": "https://artblock.io"
      }
    },
    {
      "id": 18,
      "name": "DecentraBank",
      "symbol": "DBNK",
      "icon": "🏦",
      "variation": -4.2,
      "status": "yellow",
      "volume": "550M",
      "holders": "75K",
      "marketCap": "2.3B",
      "currentPrice": "0.00134",
      "chain": "Stellar",
      "upvotes": 1050,
      "blocked": false,
      "transactions": [
        { "type": "Sell", "amount": "110,000", "price": "0.00138" },
        { "type": "Buy", "amount": "90,000", "price": "0.00133" },
        { "type": "Sell", "amount": "70,000", "price": "0.00135" }
      ],
      "topHolders": [
        { "address": "0x3456...7890", "percentage": "6.0%" },
        { "address": "0x4567...8901", "percentage": "5.6%" },
        { "address": "0x5678...9012", "percentage": "5.2%" }
      ],
      "devHoldings": "3.1%",
      "snipers": 16,
      "snipersHoldingPercentage": "8.8%",
      "socials": {
        "twitter": "https://twitter.com/decentrabank",
        "github": "https://github.com/decentrabank",
        "website": "https://decentrabank.io"
      }
    },
    {
      "id": 19,
      "name": "FoodChain",
      "symbol": "FOOD",
      "icon": "🍔",
      "variation": 3.7,
      "status": "green",
      "volume": "270M",
      "holders": "39K",
      "marketCap": "620M",
      "currentPrice": "0.00067",
      "chain": "VeChain",
      "upvotes": 480,
      "blocked": false,
      "transactions": [
        { "type": "Buy", "amount": "60,000", "price": "0.00066" },
        { "type": "Buy", "amount": "50,000", "price": "0.00067" },
        { "type": "Sell", "amount": "30,000", "price": "0.00068" }
      ],
      "topHolders": [
        { "address": "0x6789...0123", "percentage": "4.8%" },
        { "address": "0x7890...1234", "percentage": "4.4%" },
        { "address": "0x8901...2345", "percentage": "4.0%" }
      ],
      "devHoldings": "2.3%",
      "snipers": 6,
      "snipersHoldingPercentage": "3.9%",
      "socials": {
        "twitter": "https://twitter.com/foodchain",
        "github": "https://github.com/foodchain",
        "website": "https://foodchain.io"
      }
    },
    {
      "id": 20,
      "name": "BlockedPonzi",
      "symbol": "PONZ",
      "icon": "🚫",
      "variation": 0,
      "status": "red",
      "volume": "0",
      "holders": "0",
      "marketCap": "0",
      "currentPrice": "0",
      "chain": "Unknown",
      "upvotes": 0,
      "blocked": true,
      "transactions": [],
      "topHolders": [],
      "devHoldings": "0%",
      "snipers": 0,
      "snipersHoldingPercentage": "0%",
      "socials": {
        "twitter": "",
        "github": "",
        "website": ""
      }
    }
  ]

const migratedTokens = ['OldCoin', 'LegacyToken', 'VintageChain', 'RetroBlock', 'ClassicByte']

const MonexaLogo = () => (
  <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="120" height="120" fill="#40E0D0" transform="rotate(-15 20 60)" />
    <rect x="80" y="20" width="120" height="120" fill="#8A2BE2" transform="rotate(15 80 20)" />
  </svg>
)

const Header = ({ currentDate }: { currentDate: string }) => {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <div className="bg-gradient-to-r from-[#40E0D0] via-[#8A2BE2] to-[#40E0D0] rounded-lg shadow-2xl overflow-hidden">
        <div className="relative p-4">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-black" 
                 style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} 
            />
          </div>

          {/* Glitch effect */}
          <AnimatePresence>
            {isGlitching && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0 bg-[#40E0D0] mix-blend-screen"
                style={{ clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)" }}
              />
            )}
          </AnimatePresence>

          {/* Header content */}
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-2">
              <div className="flex items-center">
                <MonexaLogo />
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold text-white ml-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Monexa Token Tracker
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
              Top 10 Tokens by Variation
            </motion.p>
            <div className="grid grid-cols-3 gap-2">
              <MarketInfoCard 
                icon={<BarChart3Icon className="w-4 h-4 text-[#40E0D0]" />}
                title="Market Cap"
                value="$1.23T"
                change="+5.4%"
              />
              <MarketInfoCard 
                icon={<TrendingUpIcon className="w-4 h-4 text-[#40E0D0]" />}
                title="24h Volume"
                value="$78.9B"
                change="+12.7%"
              />
              <MarketInfoCard 
                icon={<AlertTriangleIcon className="w-4 h-4 text-[#40E0D0]" />}
                title="Volatility"
                value="High"
                change="+2.1"
              />
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

const MarketInfoCard = ({ icon, title, value, change } : {icon: any, title: any, value: any, change: any}) => (
  <motion.div 
    className="bg-white bg-opacity-10 rounded-lg p-2 backdrop-filter backdrop-blur-sm"
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(64, 224, 208, 0.3)" }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {icon}
        <div className="ml-2">
          <p className="text-xs text-[#40E0D0]">{title}</p>
          <p className="text-sm font-semibold text-white">{value}</p>
        </div>
      </div>
      <div className={`text-xs ${change.startsWith('+') ? 'text-[#40E0D0]' : 'text-[#FF6B6B]'}`}>
        {change}
      </div>
    </div>
  </motion.div>
)

const MigratedTokensMarquee = ({ tokens } : {tokens: any}) => (
  <div className="mb-4 bg-white bg-opacity-10 p-1 rounded-lg overflow-hidden">
    <motion.div 
      className="flex whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {[...tokens, ...tokens].map((token, index) => (
        <span key={index} className="mx-4 text-[#40E0D0] text-sm">
          {token} migrated
        </span>
      ))}
    </motion.div>
  </div>
)

const TokenCard = ({ token, onUpvote, onClick } : {token: any, onUpvote: any, onClick: any}) => (
  <motion.li
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    whileHover={{ scale: 1.02 }}
    className={`relative overflow-hidden rounded-lg shadow-lg list-none  ${
      token.blocked ? 'bg-gray-800' :
      token.status === 'green'
        ? 'bg-[#40E0D0] bg-opacity-20'
        : token.status === 'yellow'
        ? 'bg-[#FFD700] bg-opacity-20'
        : 'bg-[#FF6B6B] bg-opacity-20'
    } cursor-pointer`}
    onClick={() => onClick(token)}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black to-transparent opacity-10" style={{ backgroundSize: '200% 200%', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)' }}></div>
    
    <div className="relative p-3 backdrop-blur-sm backdrop-filter">
      {token.blocked ? (
        <div className="flex flex-col items-center justify-center h-full">
          <AlertTriangleIcon className="w-12 h-12 text-[#FFD700] mb-2" />
          <h3 className="text-xl font-bold text-[#FFD700] mb-1">Blocked by Monexa AI</h3>
          <p className="text-white text-center text-sm">This token has been flagged for potential risks.</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <span className="text-2xl mr-2">{token.icon}</span>
              <div>
                <span className="text-lg font-bold text-white">{token.name}</span>
                <span className="text-xs text-[#40E0D0] ml-1">({token.symbol})</span>
              </div>
            </div>
            <motion.span
              className={`text-sm font-semibold ${
                token.variation > 0 ? 'text-[#40E0D0]' : 'text-[#FF6B6B]'
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
              <span className="text-white">Price: ${token.currentPrice}</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center">
              <LinkIcon className="w-3 h-3 mr-1 text-[#8A2BE2]" />
              <span className="text-white">{token.chain}</span>
            </div>
            <motion.span
              className={`px-2 py-1 rounded text-xs ${
                token.status === 'green'
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
            e.stopPropagation();
            onUpvote(token.id);
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
            e.stopPropagation();
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

const TokenModal = ({ token, onClose } : {token: any, onClose: any}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.8, y: 50 }}
      className="bg-gray-900 p-4 rounded-lg shadow-xl max-w-md w-full mx-4 overflow-y-auto max-h-[90vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-3xl mr-2">{token.icon}</span>
          <h2 className="text-2xl font-bold text-[#40E0D0]">{token.name} <span className="text-sm text-gray-400">({token.symbol})</span></h2>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <XIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-sm font-semibold text-[#40E0D0] mb-1">Current Price</h4>
          <p className="text-lg font-bold text-white">${token.currentPrice}</p>
        </div>
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-sm font-semibold text-[#8A2BE2] mb-1">24h Change</h4>
          <p className={`text-lg font-bold ${token.variation > 0 ? 'text-[#40E0D0]' : 'text-[#FF6B6B]'}`}>
            {token.variation > 0 ? '+' : ''}{token.variation}%
          </p>
        </div>
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-sm font-semibold text-[#FFD700] mb-1">Market Cap</h4>
          <p className="text-lg font-bold text-white">${token.marketCap}</p>
        </div>
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-sm font-semibold text-[#FF6B6B] mb-1">24h Volume</h4>
          <p className="text-lg font-bold text-white">{token.volume}</p>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[#40E0D0] mb-2">Recent Transactions</h3>
        <ul className="space-y-1">
          {token.transactions.map((tx, index) => (
            <li key={index} className="bg-white bg-opacity-10 p-2 rounded text-xs flex justify-between">
              <span className={tx.type === 'Buy' ? 'text-[#40E0D0]' : 'text-[#FF6B6B]'}>{tx.type}</span>
              <span className="text-white">{tx.amount} @ ${tx.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[#8A2BE2] mb-2">Top Holders</h3>
        <ul className="space-y-1">
          {token.topHolders.map((holder, index) => (
            <li key={index} className="bg-white bg-opacity-10 p-2 rounded text-xs flex justify-between">
              <span className="text-gray-300">{holder.address}</span>
              <span className="text-[#40E0D0]">{holder.percentage}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-xs font-semibold text-[#40E0D0] mb-1">Dev Holdings</h4>
          <p className="text-sm font-bold text-white">{token.devHoldings}</p>
        </div>
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-xs font-semibold text-[#8A2BE2] mb-1">Snipers</h4>
          <p className="text-sm font-bold text-white">{token.snipers}</p>
        </div>
        <div className="bg-white bg-opacity-10 p-2 rounded">
          <h4 className="text-xs font-semibold text-[#FFD700] mb-1">Snipers Holding</h4>
          <p className="text-sm font-bold text-white">{token.snipersHoldingPercentage}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <a href={token.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-[#40E0D0] hover:text-[#30C0B0]">
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a href={token.socials.github} target="_blank" rel="noopener noreferrer" className="text-[#8A2BE2] hover:text-[#7A1BD2]">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={token.socials.website} target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:text-[#EFC700]">
            <GlobeIcon className="w-5 h-5" />
          </a>
        </div>
        <motion.button
          className="bg-[#8A2BE2] hover:bg-[#7A1BD2] text-white font-bold py-2 px-4 rounded text-sm flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCartIcon className="w-4 h-4 mr-2" />
          Quick Buy
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
)

const Footer = () => (
  <motion.footer 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mt-8 bg-white bg-opacity-10 rounded-lg shadow-lg p-4 text-xs"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h3 className="text-sm font-semibold text-[#40E0D0] mb-2">About Us</h3>
        <p className="text-gray-300">Monexa Token Tracker provides real-time data and analysis for the most cutting-edge cryptocurrencies in the market.</p>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-[#8A2BE2] mb-2">Quick Links</h3>
        <ul className="text-gray-300">
          <li className="mb-1"><a href="#" className="hover:text-[#40E0D0] transition-colors">Home</a></li>
          <li className="mb-1"><a href="#" className="hover:text-[#40E0D0] transition-colors">Market Analysis</a></li>
          <li className="mb-1"><a href="#" className="hover:text-[#40E0D0] transition-colors">Token Directory</a></li>
          <li><a href="#" className="hover:text-[#40E0D0] transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-[#FFD700] mb-2">Connect With Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-[#40E0D0] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-[#8A2BE2] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-4 pt-2 border-t border-gray-700 text-center text-gray-400">
      <p>&copy; 2023 Monexa Token Tracker. All rights reserved.</p>
    </div>
  </motion.footer>
)

export default function TokenTracker() {
  const [currentDate, setCurrentDate] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
    setTokens(tokens.map(token => 
      token.id === id ? { ...token, upvotes: token.upvotes + 1 } : token
    ))
  }

  const filteredTokens = tokens.filter(token => {
    if (filter === 'all') return true
    if (filter === 'blocked') return token.blocked
    if (filter === 'unblocked') return !token.blocked
    return true
  })

  const sortedTokens = [...filteredTokens].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] - b[sortBy]
    } else {
      return b[sortBy] - a[sortBy]
    }
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
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <div className="container mx-auto px-4 py-6">
        <Header currentDate={currentDate} />
        <MigratedTokensMarquee tokens={migratedTokens} />

        <main>
          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <label htmlFor="filter" className="text-[#40E0D0] text-sm">Filter:</label>
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
              <label htmlFor="sort" className="text-[#8A2BE2] text-sm">Sort by:</label>
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
                {sortOrder === 'asc' ? <SortAscIcon className="w-4 h-4" /> : <SortDescIcon className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

        <Footer />
      </div>

      {/* Monexa decorative elements */}
      <div className="fixed top-0 left-0 w-1 h-screen bg-gradient-to-b from-[#40E0D0] to-[#8A2BE2]"></div>
      <div className="fixed top-0 right-0 w-1 h-screen bg-gradient-to-b from-[#8A2BE2] to-[#40E0D0]"></div>
      <div className="fixed bottom-0 left-0 w-screen h-1 bg-gradient-to-r from-[#40E0D0] via-[#8A2BE2] to-[#40E0D0]"></div>

      {/* Mobile menu button */}
      <motion.button
        className="fixed top-4 right-4 z-50 lg:hidden bg-gray-800 p-2 rounded-full"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMenuOpen ? <XIcon className="w-6 h-6 text-[#40E0D0]" /> : <MenuIcon className="w-6 h-6 text-[#40E0D0]" />}
      </motion.button>

      {/* Mobile menu */}
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
                <li><a href="#" className="block py-2 text-gray-300 hover:text-[#40E0D0] transition-colors">Home</a></li>
                <li><a href="#" className="block py-2 text-gray-300 hover:text-[#40E0D0] transition-colors">Market Analysis</a></li>
                <li><a href="#" className="block py-2 text-gray-300 hover:text-[#40E0D0] transition-colors">Token Directory</a></li>
                <li><a href="#" className="block py-2 text-gray-300 hover:text-[#40E0D0] transition-colors">Contact</a></li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Token Modal */}
      <AnimatePresence>
        {selectedToken && (
          <TokenModal token={selectedToken} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  )
}