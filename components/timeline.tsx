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
        role='Python Backend Engineer'
      >
        <p>Returned full-time after graduating. Worked on Solana support, historical balance tracking, fiat currency handling, DeFi protocol integrations, exchange support, and transaction decoding.</p>
        <p>Some of the larger pieces:</p>
        <ul className='mt-0 list-disc list-outside marker:text-umber-200 pl-5'>
          <li>built Solana backend support, including spam token filtering and transaction decoding</li>
          <li>designed historical balance tracking from scratch using archive node data</li>
          <li>refactored hardcoded USD valuation into proper user-selected currency support</li>
          <li>added and maintained integrations for Balancer, Aura Finance, Beefy, Yearn, StakeDAO, and others</li>
          <li>expanded exchange and wallet support, including Coinbase ED25519 API keys and Binance Convert trades</li>
        </ul>
      </Entry>

      <Entry
        period='Jul 2024 - Oct 2024'
        title='Unyte'
        href='https://unyte.africa'
        role='Software Engineer'
      >
        <p>Worked on an API-first insurance infrastructure platform. Built backend features for policy management, provider onboarding, and workflows that helped businesses distribute insurance products across African markets.</p>
      </Entry>

      <Entry
        period='Jul 2024'
        title='Obafemi Awolowo University'
        role='B.Sc. Electrical & Electronics Engineering'
      >
        <p>Final year project: <a href='https://github.com/IsaacAdewumi/Neuron' target='_blank' rel='noopener noreferrer' className='decoration-from-font underline underline-offset-2 text-[var(--color-accent)] decoration-[var(--color-accent)]/40 hover:decoration-[var(--color-accent)]'>Neuron</a>, a BLE-based attendance system using an ESP32 microcontroller.</p>
      </Entry>

      <Entry
        period='2023 - 2024'
        title='Hackathons'
      >
        <p>Built and shipped a few projects across crypto, embedded finance, and developer tooling:</p>
        <ul className='mt-0 list-disc list-outside marker:text-umber-200 pl-5'>
          <Hackathon
            title='BridgeBloc'
            href='https://github.com/prettyirrelevant/bridgebloc'
            result='won a prize'
            event='DevX EMEA'
            eventHref='https://dorahacks.io/hackathon/devxemea/results'
          />
          <Hackathon
            title='Brazen'
            href='https://github.com/prettyirrelevant/brazen'
            result='1st place'
            event="Anchor's Embedded Finance Hackathon"
            eventHref='https://getanchor.co/blog/open.html?slug=anchor-embedded-finance-hackathon-2023-a-collision-of-creativity-and-innovation&id=65e9a0a473829fd08cd977a1'
          />
          <Hackathon
            title='Optimart'
            href='https://github.com/1802-Labs/Optimart'
            result='won a prize'
            event='XRPL Hackathon'
            eventHref='https://dorahacks.io/hackathon/xrpl-hackathon/results'
          />
          <Hackathon
            title='ContractWatch'
            href='https://github.com/1802-Labs/contractwatch'
            result='won a prize'
            event='Scroll v0rtex Hackathon'
            eventHref='https://dorahacks.io/hackathon/v0rtex-01/detail'
          />
          <Hackathon
            title='Wrapped Naira'
            href='https://github.com/prettyirrelevant/wrapped-naira'
            result='won a prize'
            event='Scroll v0rtex Hackathon'
            eventHref='https://dorahacks.io/hackathon/v0rtex-01/detail'
          />
        </ul>
      </Entry>

      <Entry
        period='May 2022 - 2024'
        title='FlashPay'
        href='https://github.com/FlashPayInc'
        role='Technical Cofounder & Lead Engineer'
      >
        <p>Part-time.</p>
        <p>Cofounded FlashPay, one of the early payment-link platforms on Algorand. We raised over $40K from the Algorand Foundation and built infrastructure for merchants to accept Algorand-based payments.</p>
        <p>My work focused on the Django backend service and JavaScript SDK:</p>
        <ul className='mt-0 list-disc list-outside marker:text-umber-200 pl-5'>
          <li>led development of the Django backend for payment links, merchant APIs, API keys, wallet setup, transaction verification, webhooks, and revenue reporting</li>
          <li>built payment lifecycle infrastructure for creating, tracking, verifying, and reconciling payments</li>
          <li>developed the JavaScript SDK for merchant integrations, including payment initialization, asset configuration, callbacks, and example flows</li>
          <li>designed API flows and maintained developer documentation for merchants accepting ALGO, USDC, USDT, and other Algorand-based assets</li>
        </ul>
      </Entry>

      <Entry
        period='Apr 2022 - Apr 2023'
        title='Rotki'
        href='https://rotki.com'
        role='Python Backend Engineer'
      >
        <p>First full-time backend role in crypto. Worked across accounting, DeFi decoding, asset management, and wallet support.</p>
        <p>Highlights:</p>
        <ul className='mt-0 list-disc list-outside marker:text-umber-200 pl-5'>
          <li>replaced the Uniswap V3 subgraph dependency with a purely on-chain approach</li>
          <li>reduced Electron app memory usage by about 30% by revamping asset management endpoints</li>
          <li>added support for Average Cost Basis and HIFO accounting methods</li>
          <li>integrated transaction decoding for Uniswap V2/V3, Sushiswap, Curve, MakerDAO, and related protocols</li>
          <li>added Taproot BTC address support, per-user notes, and spam NFT filtering</li>
        </ul>
      </Entry>

      <Entry
        period='Jan 2022 - Apr 2022'
        title='DeCHO'
        href='https://github.com/xcaDeCHO/DeCHO-Backend'
        role='Full Stack Engineer'
      >
        <p>Worked on an Algorand Foundation grant-backed product. Built a Swift native module to integrate the Algorand SDK into a React Native app, developed Django REST Framework endpoints, and implemented wallet integrations for the web app.</p>
      </Entry>

      <Entry
        period='Oct 2021 - Jan 2022'
        title='Saber Creative Agency'
        role='Software Engineer'
      >
        <p>Built backend endpoints and UI components for a hospitality management application using Django. Also worked on CI workflows and improved the test suite.</p>
      </Entry>

      <Entry
        period='Jan 2021 - Mar 2021'
        title='Mul-T-Lock Nigeria'
        role='Django Developer Intern'
      >
        <p>First internship. Built a product landing page in Django and worked on an authentication system for IoT device integration using Django Channels.</p>
      </Entry>

      <Entry
        period='2020'
        title='Freelance Software Developer'
      >
        <p>Started taking client work during the COVID lockdown period. Built web applications and backend systems using Django, JavaScript, TypeScript, Flask, and other web technologies.</p>
        <p>Some early work included:</p>
        <ul className='mt-0 list-disc list-outside marker:text-umber-200 pl-5'>
          <li>Django-based e-commerce websites</li>
          <li>client-facing web applications</li>
          <li>a real-time end-to-end encrypted CLI chat application</li>
        </ul>
        <p>This was where I started moving from "learning to code" into building software for other people.</p>
      </Entry>

      <Entry
        period='Dec 2001'
        title='Born in Lagos'
      />
    </div>
  )
}
