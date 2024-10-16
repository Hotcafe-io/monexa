import { millify } from 'millify';
import BigNumber from 'bignumber.js';

export interface Token {
    id: number;
    name: string;
    symbol: string;
    icon: string;
    variation: number;
    status: string;
    volume: string;
    holders: string;
    marketCap: string;
    currentPrice: string;
    chain: string;
    upvotes: number;
    liquidity: string;
    blocked: boolean;
    transactions: Array<{
        type: string;
        amount: string;
        price: string;
    }>;
    topHolders: Array<{
        address: string;
        percentage: string;
    }>;
    devHoldings: string;
    snipers: number;
    snipersHoldingPercentage: string;
    socials: {
        twitter: string;
        github: string;
        website: string;
    };
    score: number;
}

interface RawTokenData {
    address: string;
    name: string;
    symbol: string;
    chain: string;
    volume: number;
    holdersCount: number;
    pair: string;
    supply: string;
    isRug: boolean;
    holders: Array<{ holder: string; percentual: string; amount: string }>;
    snipers: any[];
    transactions: Array<{ type: string; ethAmount: number; txHash: string; blockNumber: number }>;
    isHoneypot: boolean;
    isVerified: boolean;
    isTrusted: boolean;
    isLocked: boolean;
    deployer: string;
    iconUrl?: string;
    initialLiquidity: string;
    liquidity: string;
    price: string;
    marketcap: string;
    initialPrice: string;
    buys: number;
    sells: number;
    initialSupply: string;
    // Add other properties as needed
}

export default function TokenParser(data: RawTokenData): Token {
    const ethPrice = 2573; // Fetch the current ETH price from an API

    function displayFullValue(value) {
        // Convert to a string with sufficient decimal places
        const decimalValue = value.toFixed(12);  // Adjust 12 to show more decimals if needed
        return decimalValue;
    }

    const tokensOutPool = new BigNumber(100).minus(new BigNumber(data.initialSupply).times(100).dividedBy(data.supply).toFixed(2)).toFixed(2)

    const liquidity = (Number(data.liquidity) - Number(data.initialLiquidity)) * ethPrice;

    const ponderHolders = data.holders.length > 100 ? data.holders.length / 2 : 0;

    const ethVolume = data.volume * ethPrice;

    const oldRPScore = (liquidity / data.holders.length) - (ponderHolders * (ethVolume / 100000));

    const getStatus = () => {
        if (liquidity < ethPrice / 2 || Number(data.initialLiquidity) < 1 || Number(tokensOutPool) > 20) {
            return 'red';
        }
        if (oldRPScore < 100) {
            return 'green';
        }
        if (oldRPScore < 200) {
            return 'yellow';
        }
        return 'red';
    };

    const calculateDevHoldings = () => {
        const devHolder = data.holders.find(h => h.holder === data.deployer);
        return devHolder ? devHolder.percentual : '0';
    };


    const variation = ((Number(data.price) - Number(data.initialPrice)) / Number(data.initialPrice)) * 100

    const honeypotBaseCheck = data.sells / data.buys < 0.2;

    return {
        id: 0, // Assign an appropriate ID or generate one
        ...data,
        liquidity: millify(Number(data.liquidity) * ethPrice),
        icon: data?.iconUrl || '',
        score: oldRPScore > 0 ? oldRPScore : 1,
        variation: Number(variation.toFixed(2)), // Variation data is not provided in the raw data
        status: getStatus(),
        volume: "$" + millify(data.volume * ethPrice),
        holders: data.holdersCount.toString(),
        marketCap: millify(Number(data.marketcap) * ethPrice), // Market cap is not provided in the raw data
        currentPrice: displayFullValue(Number(data.price)), // Current price is not provided in the raw data
        chain: data.chain,
        upvotes: 0, // Upvotes are not provided in the raw data
        blocked: honeypotBaseCheck || Number(tokensOutPool) > 50, // Blocked status is not provided in the raw data
        transactions: data.transactions
            .map(tx => ({
                type: tx.type,
                amount: "$" + millify(tx.ethAmount * ethPrice),
                price: '0', // Price per token is not provided in the raw data
            }))
            .reverse()
            .slice(0, 10),
        topHolders: data.holders
            .filter(e => e.holder.toLowerCase() !== data.pair.toLowerCase())
            .sort((a, b) => {
                const percentageA = parseFloat(a.percentual);
                const percentageB = parseFloat(b.percentual);
                return percentageB - percentageA;
            })
            .slice(0, 10)
            .map(holder => ({
                address: holder.holder,
                percentage: holder.percentual + "%",
            })),
        devHoldings: calculateDevHoldings() + "%",
        snipers: data.snipers.length,
        snipersHoldingPercentage: data.holders
            .filter(e => data.snipers.includes(e.holder))
            .reduce((acc, x) => acc + Number(x.percentual), 0)
            .toString() + "%", // Snipers holding percentage is not provided in the raw data
        socials: {
            twitter: '',
            github: '',
            website: '',
        }, // Social links are not provided in the raw data
    };
}