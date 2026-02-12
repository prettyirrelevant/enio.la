function ProjectName({ title }: { title: string }) {
  return (
    <span
      className='inline-flex items-center whitespace-nowrap select-none text-black overflow-visible align-middle'
      title={title}
    >
      <span
        className='text-[16px] tracking-[-0.005em] leading-none font-heading'
        style={{
          fontVariationSettings: '"wght" 600, "opsz" 32',
        }}
      >
        {title}
      </span>
    </span>
  )
}

export function Neuron() {
  return <ProjectName title='Neuron' />
}

export function WrappedNaira() {
  return <ProjectName title='Wrapped Naira' />
}

export function Gistrunner() {
  return <ProjectName title='Gistrunner' />
}

export function Bridgebloc() {
  return <ProjectName title='Bridgebloc' />
}

export function Decodify() {
  return <ProjectName title='Decodify' />
}

export function Waakye() {
  return <ProjectName title='Waakye' />
}
