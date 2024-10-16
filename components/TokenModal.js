// components/TokenModal.js
import React from 'react'
import { motion } from 'framer-motion'
import { XIcon, TwitterIcon, GithubIcon, GlobeIcon, ShoppingCartIcon } from 'lucide-react'

/** @typedef {import('../types/index').Token} Token */

/**
 * @param {Object} props
 * @param {Token} props.token
 * @param {() => void} props.onClose
 */
const TokenModal = ({ token, onClose }) => (
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
					<h2 className="text-2xl font-bold text-[#40E0D0]">
						{token.name}{' '}
						<span className="text-sm text-gray-400">({token.symbol})</span>
					</h2>
				</div>
				<button onClick={onClose} className="text-gray-400 hover:text-white">
					<XIcon className="w-6 h-6" />
				</button>
			</div>

			<div className="grid grid-cols-2 gap-4 mb-4">
				<div className="bg-white bg-opacity-10 p-2 rounded">
					<h4 className="text-sm font-semibold text-[#40E0D0] mb-1">
						Liquidity
					</h4>
					<p className="text-lg font-bold text-white">${token.liquidity}</p>
				</div>
				<div className="bg-white bg-opacity-10 p-2 rounded">
					<h4 className="text-sm font-semibold text-[#8A2BE2] mb-1">
						24h Change
					</h4>
					<p
						className={`text-lg font-bold ${token.variation > 0 ? 'text-[#40E0D0]' : 'text-[#FF6B6B]'
							}`}
					>
						{token.variation > 0 ? '+' : ''}
						{token.variation}%
					</p>
				</div>
				<div className="bg-white bg-opacity-10 p-2 rounded">
					<h4 className="text-sm font-semibold text-[#FFD700] mb-1">
						Market Cap
					</h4>
					<p className="text-lg font-bold text-white">${token.marketCap}</p>
				</div>
				<div className="bg-white bg-opacity-10 p-2 rounded">
					<h4 className="text-sm font-semibold text-[#FF6B6B] mb-1">
						24h Volume
					</h4>
					<p className="text-lg font-bold text-white">{token.volume}</p>
				</div>
			</div>

			<div className="mb-4">
				<h3 className="text-lg font-semibold text-[#40E0D0] mb-2">
					Recent Transactions
				</h3>
				<ul className="space-y-1">
					{token.transactions.map((tx, index) => (
						<li
							key={index}
							className="bg-white bg-opacity-10 p-2 rounded text-xs flex justify-between"
						>
							<span
								className={
									tx.type === 'buy' ? 'text-[#40E0D0]' : 'text-[#FF6B6B]'
								}
							>
								{tx.type}
							</span>
							<span className="text-white">
								{tx.amount} @ ${tx.price}
							</span>
						</li>
					))}
				</ul>
			</div>

			<div className="mb-4">
				<h3 className="text-lg font-semibold text-[#8A2BE2] mb-2">
					Top Holders
				</h3>
				<ul className="space-y-1">
					{token.topHolders.map((holder, index) => (
						<li
							key={index}
							className="bg-white bg-opacity-10 p-2 rounded text-xs flex justify-between"
						>
							<span className="text-gray-300">{holder.address}</span>
							<span className="text-[#40E0D0]">{holder.percentage}</span>
						</li>
					))}
				</ul>
			</div>

			<div className="grid grid-cols-3 gap-2 mb-4">
				<div className="bg-white bg-opacity-10 p-2 rounded">
					<h4 className="text-xs font-semibold text-[#40E0D0] mb-1">
						Dev Holdings
					</h4>
					<p className="text-sm font-bold text-white">{token.devHoldings}</p>
				</div>
				<div className="bg-white bg-opacity-10 p-2 rounded">
					<h4 className="text-xs font-semibold text-[#8A2BE2] mb-1">
						Snipers
					</h4>
					<p className="text-sm font-bold text-white">{token.snipers}</p>
				</div>
				<div className="bg-white bg-opacity-10 p-2 rounded">
					<h4 className="text-xs font-semibold text-[#FFD700] mb-1">
						Snipers Holding
					</h4>
					<p className="text-sm font-bold text-white">
						{token.snipersHoldingPercentage}
					</p>
				</div>
			</div>

			<div className="flex justify-between items-center mb-4">
				<div className="flex space-x-2">
					<a
						href={token.socials.twitter}
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#40E0D0] hover:text-[#30C0B0]"
					>
						<TwitterIcon className="w-5 h-5" />
					</a>
					<a
						href={token.socials.github}
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#8A2BE2] hover:text-[#7A1BD2]"
					>
						<GithubIcon className="w-5 h-5" />
					</a>
					<a
						href={token.socials.website}
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#FFD700] hover:text-[#EFC700]"
					>
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

export default TokenModal
