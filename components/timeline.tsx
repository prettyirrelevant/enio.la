import cn from 'clsx'

function Entry({
  period,
  title,
  href,
  role,
  children,
}: {
  period: string
  title: string
  href?: string
  role?: string
  children?: React.ReactNode
}) {
  const heading = href ? (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='decoration-from-font underline underline-offset-2 text-[var(--color-accent)] decoration-[var(--color-accent)]/40 hover:decoration-[var(--color-accent)]'
      draggable={false}
    >
      {title}
    </a>
  ) : (
    <span className='text-umber-600'>{title}</span>
  )

  return (
    <div className='relative pl-7 pb-10 last:pb-0'>
      <div className='absolute left-0 top-[7px] w-2.5 h-2.5 rounded-full bg-umber-200 ring-2 ring-[var(--background)]' />
      <div className='absolute left-[4.5px] top-[17px] bottom-0 w-px bg-umber-border last:hidden' />
      <p className='text-xs text-umber-300 tracking-wide mb-1'>{period}</p>
      <p className='font-semibold text-umber-600' style={{ fontFamily: 'var(--heading)', fontVariationSettings: '"wght" 600, "opsz" 32' }}>
        {heading}
        {role && <span className='font-normal text-umber-400' style={{ fontFamily: 'var(--serif)', fontVariationSettings: '"wght" 480', fontWeight: 400 }}>, {role}</span>}
      </p>
      {children && <div className='mt-2 text-umber-400'>{children}</div>}
    </div>
  )
}

function Hackathon({
  title,
  href,
  result,
  event,
  eventHref,
}: {
  title: string
  href: string
  result: string
  event: string
  eventHref: string
}) {
  return (
    <li className='pl-0'>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='decoration-from-font underline underline-offset-2 text-[var(--color-accent)] decoration-[var(--color-accent)]/40 hover:decoration-[var(--color-accent)]'
        draggable={false}
      >
        {title}
      </a>
      {': '}{result} at{' '}
      <a
        href={eventHref}
        target='_blank'
        rel='noopener noreferrer'
        className='decoration-from-font underline underline-offset-2 text-[var(--color-accent)] decoration-[var(--color-accent)]/40 hover:decoration-[var(--color-accent)]'
        draggable={false}
      >
        {event}
      </a>
    </li>
  )
}

export function Timeline() {
  return (
    <div className='mt-7 relative'>
      <Entry
        period='Oct 2024 - Mar 2026'
        title='Rotki'
        href='https://rotki.com'
        role='python backend engineer (2nd stint)'
      >
        <p>Returned full-time after graduating. Added Solana chain support, built historical balance tracking from scratch, refactored hardcoded USD handling into proper user-selected currency support, added protocol support for Balancer, Aura Finance, Beefy, Yearn, and others.</p>
      </Entry>

      <Entry
        period='Jul 2024 - Oct 2024'
        title='Unyte'
        href='https://unyte.africa'
        role='software engineer'
      >
        <p>Built insurance policy management and provider onboarding for an API-first insurance platform.</p>
      </Entry>

      <Entry
        period='Jul 2024'
        title='Obafemi Awolowo University'
        role='B.Sc. Electrical & Electronics Engineering'
      >
        <p>Final year project: <a href='https://github.com/prettyirrelevant/final-year-project' target='_blank' rel='noopener noreferrer' className='decoration-from-font underline underline-offset-2 text-[var(--color-accent)] decoration-[var(--color-accent)]/40 hover:decoration-[var(--color-accent)]'>Neuron</a>, a BLE-based attendance system using an ESP32 microcontroller.</p>
      </Entry>

      <Entry
        period='2023 - 2024'
        title='Hackathons'
      >
        <ul className='mt-0 list-disc list-outside marker:text-umber-200 pl-5'>
          <Hackathon
            title='BridgeBloc'
            href='https://github.com/prettyirrelevant/bridgebloc'
            result='won $9,000 (Circle + Polygon), 300+ submissions'
            event='DevX EMEA'
            eventHref='https://dorahacks.io/hackathon/devxemea/results'
          />
          <Hackathon
            title='Brazen'
            href='https://github.com/prettyirrelevant/brazen'
            result='1st place, won &#8358;1,000,000'
            event="Anchor's Embedded Finance Hackathon"
            eventHref='https://getanchor.co/blog/open.html?slug=anchor-embedded-finance-hackathon-2023-a-collision-of-creativity-and-innovation&id=65e9a0a473829fd08cd977a1'
          />
          <Hackathon
            title='Optimart'
            href='https://github.com/1802-Labs/Optimart'
            result='winner, 90+ submissions'
            event='XRPL Hackathon'
            eventHref='https://dorahacks.io/hackathon/xrpl-hackathon/results'
          />
          <Hackathon
            title='ContractWatch'
            href='https://github.com/1802-Labs/contractwatch'
            result='prize winner'
            event='Scroll v0rtex Hackathon'
            eventHref='https://dorahacks.io/hackathon/v0rtex-01/detail'
          />
          <Hackathon
            title='Wrapped Naira'
            href='https://github.com/prettyirrelevant/wrapped-naira'
            result='prize winner'
            event='Scroll v0rtex Hackathon'
            eventHref='https://dorahacks.io/hackathon/v0rtex-01/detail'
          />
        </ul>
      </Entry>

      <Entry
        period='May 2022 - Jan 2024'
        title='Flashpay'
        href='https://github.com/FlashPayInc/flashpay-core'
        role='lead developer & cofounder'
      >
        <p>Payments on Algorand. Secured an Algorand Foundation grant. Led architecture and development.</p>
      </Entry>

      <Entry
        period='Apr 2022 - Apr 2023'
        title='Rotki'
        href='https://rotki.com'
        role='python backend engineer (1st stint)'
      >
        <p>Replaced Uniswap V3 subgraph dependency with a purely on-chain approach, reduced Electron app memory by ~30% through revamped asset management endpoints, added support for Average Cost Basis and HIFO accounting methods, integrated transaction decoding for protocols like Uniswap V2/V3, Sushiswap, Curve, and MakerDAO. Also added taproot BTC address support, per-user notes, and spam NFT filtering.</p>
      </Entry>

      <Entry
        period='Jan 2022 - Apr 2022'
        title='DeCHO'
        href='https://github.com/xcaDeCHO/DeCHO-Backend'
        role='full stack engineer'
      >
        <p>Algorand Foundation grant recipient. Built a Swift native module to integrate the Algorand SDK in the React Native app, developed API endpoints with Django REST Framework, and implemented wallet integrations for the web version.</p>
      </Entry>

      <Entry
        period='Oct 2021 - Jan 2022'
        title='Saber Creative Agency'
        role='software engineer'
      >
        <p>Built endpoints and UI components for a hospitality management app in Django. Set up CI workflows and improved the testing suite.</p>
      </Entry>

      <Entry
        period='Jan 2021 - Mar 2021'
        title='Mul-T-Lock Nigeria'
        role='django developer intern'
      >
        <p>First internship. Built a product landing page in Django, worked on an authentication system for IoT device integration using Django Channels.</p>
      </Entry>

      <Entry
        period='2020'
        title='The start'
      >
        <p>COVID lockdown, Python, Django. The rest followed from there.</p>
      </Entry>

      <Entry
        period='Dec 2001'
        title='Born'
      />
    </div>
  )
}
