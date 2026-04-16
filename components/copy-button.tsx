'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={copied ? 'Copied' : 'Copy code'}
      className='absolute top-2 right-2 p-1.5 rounded-xs text-umber-300 hover:text-umber-600 bg-[#f5f2ec] opacity-0 max-md:opacity-100 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-umber-400 focus-visible:outline-dotted transition-opacity select-none cursor-pointer'
    >
      {copied ? (
        <Check className='w-[18px] h-[18px]' />
      ) : (
        <Copy className='w-[18px] h-[18px]' />
      )}
    </button>
  )
}
