import {
  CpuChipIcon,
  CurrencyDollarIcon,
  CommandLineIcon,
  ArrowsRightLeftIcon,
  MagnifyingGlassIcon,
  MusicalNoteIcon,
} from '@heroicons/react/16/solid'

function LogoWithIcon({
  icon,
  title,
}: {
  icon?: React.ReactNode
  title: string
}) {
  return (
    <span
      className='inline-flex items-center gap-1 whitespace-nowrap select-none text-black overflow-visible align-middle'
      title={title}
    >
      {icon ? <span className='shrink-0 min-w-0 -ml-[1px]'>{icon}</span> : null}
      <span
        className='text-[16px] tracking-[-0.005em] leading-none'
        style={{
          fontVariationSettings: '"wght" 550, "opsz" 20',
          fontFeatureSettings:
            '"dlig" 1, "cv01", "cv03", "cv04", "cv05", "cv09", "calt", "ss03", "cpsp", "liga", "ordn"',
        }}
      >
        {title}
      </span>
    </span>
  )
}

export function Neuron({ height = 18 }) {
  return <LogoWithIcon icon={<CpuChipIcon height={height} />} title='Neuron' />
}

export function WrappedNaira({ height = 18 }) {
  return <LogoWithIcon icon={<CurrencyDollarIcon height={height} />} title='Wrapped Naira' />
}

export function Gistrunner({ height = 18 }) {
  return <LogoWithIcon icon={<CommandLineIcon height={height} />} title='Gistrunner' />
}

export function Bridgebloc({ height = 18 }) {
  return <LogoWithIcon icon={<ArrowsRightLeftIcon height={height} />} title='Bridgebloc' />
}

export function Decodify({ height = 18 }) {
  return <LogoWithIcon icon={<MagnifyingGlassIcon height={height} />} title='Decodify' />
}

export function Waakye({ height = 18 }) {
  return <LogoWithIcon icon={<MusicalNoteIcon height={height} />} title='Waakye' />
}
