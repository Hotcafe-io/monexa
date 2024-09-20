// utils/formatMarketCap.js

export const formatMarketCap = (marketCap) => {
  if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`
  if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`
  if (marketCap >= 1e3) return `$${(marketCap / 1e3).toFixed(2)}K`
  return `$${marketCap.toFixed(2)}`
}
