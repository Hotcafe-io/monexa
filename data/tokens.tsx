export interface Token {
  id: number
  name: string
  symbol: string
  icon: string
  variation: number
  status: string
  volume: string
  holders: string
  marketCap: string
  currentPrice: string
  chain: string
  upvotes: number
  blocked: boolean
  transactions: Array<{
    type: string
    amount: string
    price: string
  }>
  topHolders: Array<{
    address: string
    percentage: string
  }>
  devHoldings: string
  snipers: number
  snipersHoldingPercentage: string
  socials: {
    twitter: string
    github: string
    website: string
  }
}

const initialTokens: Token[] = [
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

export default initialTokens
