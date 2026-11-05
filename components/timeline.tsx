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
        <p>Returned full-time after graduating. Backend work across chain support, accounting, and DeFi integrations.</p>
        <p>The larger pieces:</p>
        <ul className='mt-0 list-disc list-outside marker:text-umber-200 pl-5'>
          <li>shipped Solana support, including transaction decoding and spam token filtering</li>
          <li>designed historical balance tracking from scratch: transaction replay for fine-grained balances, archive node queries for native and ERC20 balances</li>
          <li>replaced hardcoded USD valuation with user-selected currency support</li>
          <li>added and maintained integrations for Balancer, Aura Finance, Beefy, Yearn, and StakeDAO</li>
          <li>expanded exchange and wallet support, including Coinbase ED25519 API keys and Binance Convert trades</li>
        </ul>
      </Entry>

      <Entry
        period='Jul 2024 - Oct 2024'
        title='Unyte'
        href='https://unyte.africa'
        role='Software Engineer'
      >
        <p>Built backend features for policy management and provider onboarding on an API-first insurance platform. The product let businesses distribute insurance across African markets.</p>
      </Entry>

      <Entry
        period='Jul 2024'
        title='Obafemi Awolowo University'
        role='B.Sc. Electrical & Electronics Engineering'
      >
        <p>Final year project: <a href='https://github.com/IsaacAdewumi/Neuron' target='_blank' rel='noopener noreferrer' className='decoration-from-font underline underline-offset-2 text-[var(--color-accent)] decoration-[var(--color-accent)]/40 hover:decoration-[var(--color-accent)]'>Neuron</a>, a BLE-based attendance system built on an ESP32 microcontroller.</p>
      </Entry>

      <Entry
        period='2023 - 2024'
        title='Hackathons'
      >
        <p>Five projects across crypto, embedded finance, and developer tooling:</p>
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
        <p>Cofounded FlashPay part-time, one of the early payment-link platforms on Algorand, backed by an Algorand Foundation grant. Merchants used it to accept Algorand-based payments.</p>
        <p>I owned the Django backend service and the JavaScript SDK:</p>
        <ul className='mt-0 list-disc list-outside marker:text-umber-200 pl-5'>
          <li>led the Django backend: payment links, merchant APIs, API keys, wallet setup, transaction verification, webhooks, and revenue reporting</li>
          <li>built the payment lifecycle: creating, tracking, verifying, and reconciling payments</li>
          <li>wrote the JavaScript SDK merchants integrated with, covering payment initialization, asset configuration, callbacks, and example flows</li>
          <li>designed the API flows and kept the developer docs current for merchants accepting ALGO, USDC, USDT, and other Algorand assets</li>
        </ul>
      </Entry>

      <Entry
        period='Apr 2022 - Apr 2023'
        title='Rotki'
        href='https://rotki.com'
        role='Python Backend Engineer'
      >
        <p>First full-time backend role in crypto, across accounting, DeFi decoding, asset management, and wallet support.</p>
        <p>The larger pieces:</p>
        <ul className='mt-0 list-disc list-outside marker:text-umber-200 pl-5'>
          <li>removed the Uniswap V3 subgraph dependency by moving retrieval on-chain</li>
          <li>cut Electron app memory usage by about 30% by revamping asset management endpoints</li>
          <li>added Average Cost Basis and HIFO accounting methods</li>
          <li>decoded transactions for Uniswap V2/V3, Sushiswap, Curve, and MakerDAO</li>
          <li>added Taproot BTC address support, per-user notes, and spam NFT filtering</li>
        </ul>
      </Entry>

      <Entry
        period='Jan 2022 - Apr 2022'
        title='DeCHO'
        href='https://github.com/xcaDeCHO/DeCHO-Backend'
        role='Full Stack Engineer'
      >
        <p>Built a Swift native module to bring the Algorand SDK into a React Native app, wrote Django REST Framework endpoints, and added wallet integrations to the web app. The product ran on an Algorand Foundation grant.</p>
      </Entry>

      <Entry
        period='Oct 2021 - Jan 2022'
        title='Saber Creative Agency'
        role='Software Engineer'
      >
        <p>Built backend endpoints and UI components for a hospitality management application in Django. Set up CI workflows and improved the test suite.</p>
      </Entry>

      <Entry
        period='Jan 2021 - Mar 2021'
        title='Mul-T-Lock Nigeria'
        role='Django Developer Intern'
      >
        <p>First internship. Built a product landing page in Django and an authentication system for IoT devices using Django Channels.</p>
      </Entry>

      <Entry
        period='2020'
        title='Freelance Software Developer'
      >
        <p>Started taking client work during the COVID lockdown. Built web applications and backend systems in Django, Flask, JavaScript, and TypeScript.</p>
        <p>Early work included:</p>
        <ul className='mt-0 list-disc list-outside marker:text-umber-200 pl-5'>
          <li>Django-based e-commerce websites</li>
          <li>client-facing web applications</li>
          <li>a real-time end-to-end encrypted CLI chat application</li>
        </ul>
        <p>This is where I moved from learning to code into building software for other people.</p>
      </Entry>

      <Entry
        period='Dec 2001'
        title='Born in Lagos'
      />
    </div>
  )
}
