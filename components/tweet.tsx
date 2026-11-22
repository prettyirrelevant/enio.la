import Image from 'next/image'
import { Play } from 'lucide-react'

export function Tweet({
  url,
  name,
  handle,
  date,
  text,
  thumbnail,
}: {
  url: string
  name: string
  handle: string
  date: string
  text: string
  thumbnail?: string
}) {
  return (
    <blockquote className='mt-7 pl-5 not-mobile:text-umber-400 flex gap-5 items-start'>
      <div className='flex-1 min-w-0'>
        <p>{text}</p>
        <p className='mt-2 font-sans text-sm text-umber-400'>
          {name} (@{handle}) · <time>{date}</time> ·{' '}
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='underline underline-offset-2 text-[var(--color-accent)] decoration-[var(--color-accent)]/40 hover:decoration-[var(--color-accent)]'
          >
            Watch on X
          </a>
        </p>
      </div>
      {thumbnail ? (
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Watch the video on X'
          className='group relative block shrink-0 w-16 sm:w-20 aspect-[3/4] overflow-hidden border border-umber-border focus-visible:outline focus-visible:outline-umber-400 focus-visible:outline-dotted focus-visible:outline-offset-2'
        >
          <Image
            src={thumbnail}
            alt=''
            fill
            sizes='80px'
            className='object-cover'
          />
          <span className='absolute inset-0 flex items-center justify-center'>
            <span className='flex items-center justify-center size-7 rounded-full bg-umber-900/55 text-umber-50 transition-colors group-hover:bg-umber-900/80'>
              <Play className='size-3 translate-x-px' fill='currentColor' />
            </span>
          </span>
        </a>
      ) : null}
    </blockquote>
  )
}
