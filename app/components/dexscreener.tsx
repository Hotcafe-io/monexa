'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ExternalLink, Copy, Check } from "lucide-react"

interface DexScreenerButtonsProps {
    address: string
    chain: string
}

export default function DexScreenerButtons({ address, chain }: DexScreenerButtonsProps = { address: '0x123...', chain: 'ethereum' }) {
    const [copied, setCopied] = useState(false)

    const dexScreenerUrl = `https://dexscreener.com/${chain}/${address}`

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(address)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    return (
        <TooltipProvider>
            <div className="flex space-x-2">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(dexScreenerUrl, '_blank')}
                            aria-label="View on DexScreener"
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View on DexScreener
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Open in DexScreener</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={copyToClipboard}
                            aria-label="Copy address to clipboard"
                        >
                            {copied ? (
                                <Check className="mr-2 h-4 w-4" />
                            ) : (
                                <Copy className="mr-2 h-4 w-4" />
                            )}
                            {copied ? 'Copied!' : 'Copy Address'}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Copy address to clipboard</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    )
}