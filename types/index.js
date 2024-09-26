/**
 * @typedef {Object} Transaction
 * @property {string} type - The type of the transaction
 * @property {string} amount - The amount involved in the transaction
 * @property {string} price - The price at which the transaction occurred
 */

/**
 * @typedef {Object} TopHolder
 * @property {string} address - The address of the top holder
 * @property {string} percentage - The percentage held by the top holder
 */

/**
 * @typedef {Object} Socials
 * @property {string} twitter - The Twitter handle or URL
 * @property {string} github - The GitHub username or URL
 * @property {string} website - The website URL
 */

/**
 * @typedef {Object} Token
 * @property {number} id - The unique identifier of the token
 * @property {string} name - The name of the token
 * @property {string} symbol - The symbol of the token
 * @property {string} icon - The icon URL of the token
 * @property {number} variation - The variation of the token
 * @property {string} status - The status of the token
 * @property {string} volume - The trading volume of the token
 * @property {string} holders - The number of token holders
 * @property {string} marketCap - The market capitalization of the token
 * @property {string} currentPrice - The current price of the token
 * @property {string} chain - The blockchain on which the token exists
 * @property {number} upvotes - The number of upvotes for the token
 * @property {boolean} blocked - Whether the token is blocked or not
 * @property {Transaction[]} transactions - An array of transaction objects
 * @property {TopHolder[]} topHolders - An array of top holder objects
 * @property {string} devHoldings - The developer holdings of the token
 * @property {number} snipers - The number of snipers for the token
 * @property {string} snipersHoldingPercentage - The percentage of tokens held by snipers
 * @property {Socials} socials - An object containing social media links
 */

export {}