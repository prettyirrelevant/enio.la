'use client'

function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className='print:hidden text-xs text-umber-300 hover:text-umber-500 transition-colors cursor-pointer'
    >
      print / save as pdf
    </button>
  )
}

function Section({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`mt-10 first:mt-0 ${className || ''}`}>
      <h2
        className='text-xs uppercase tracking-widest text-umber-300 print:text-umber-600 mb-4 print:text-[10px]'
        style={{ fontFamily: 'var(--sans)' }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}

function Job({
  title,
  company,
  location,
  period,
  children,
}: {
  title: string
  company?: string
  location?: string
  period: string
  children?: React.ReactNode
}) {
  return (
    <div className='mb-6 last:mb-0'>
      <div className='flex flex-wrap items-baseline justify-between gap-x-3'>
        <p className='font-semibold text-umber-600' style={{ fontFamily: 'var(--heading)', fontVariationSettings: '"wght" 600, "opsz" 32' }}>
          {title}
          {company && <span className='font-normal text-umber-400 print:text-umber-600' style={{ fontFamily: 'var(--serif)', fontVariationSettings: '"wght" 480', fontWeight: 400 }}> at {company}</span>}
        </p>
        <p className='text-xs text-umber-300 print:text-umber-600 whitespace-nowrap'>{period}</p>
      </div>
      {location && <p className='text-xs text-umber-300 print:text-umber-600'>{location}</p>}
      {children && <ul className='mt-2 list-disc list-outside marker:text-umber-200 pl-5 text-umber-500'>{children}</ul>}
    </div>
  )
}

function Hackathon({ project, event, eventHref, result }: { project: string; event: string; eventHref: string; result: string }) {
  return (
    <li className='pl-1.5'>
      <span className='font-semibold text-umber-600' style={{ fontFamily: 'var(--heading)', fontVariationSettings: '"wght" 600, "opsz" 32' }}>{project}</span>
      <span className='text-umber-400 print:text-umber-600' style={{ fontFamily: 'var(--serif)', fontVariationSettings: '"wght" 480', fontWeight: 400 }}> at <a href={eventHref} target='_blank' rel='noopener noreferrer' className='text-[var(--color-accent)] hover:underline'>{event}</a></span>
      <span className='text-umber-300 print:text-umber-600'> : {result}</span>
    </li>
  )
}

function Project({ name, href, description }: { name: string; href: string; description: string }) {
  return (
    <li className='pl-1.5'>
      <a href={href} target='_blank' rel='noopener noreferrer' className='font-semibold text-[var(--color-accent)] hover:underline' style={{ fontFamily: 'var(--heading)', fontVariationSettings: '"wght" 600, "opsz" 32' }}>{name}</a>
      <span className='text-umber-400 print:text-umber-600'> : {description}</span>
    </li>
  )
}

export function CV() {
  return (
    <div className='print:text-[13px] print:leading-[1.4]'>
      <header className='mb-4'>
        <div className='flex items-baseline justify-between'>
          <h1
            className='font-semibold text-umber-600'
            style={{ fontFamily: 'var(--heading)', fontVariationSettings: '"wght" 600, "opsz" 32' }}
          >
            Isaac Adewumi
          </h1>
          <PrintButton />
        </div>
        <p className='text-umber-400 print:text-umber-600 mt-1 text-xs'>
          Lagos, Nigeria
          <span className='text-umber-200 mx-1.5'>|</span>
          <a href='mailto:hi@enio.la' className='text-[var(--color-accent)] hover:underline'>hi@enio.la</a>
          <span className='text-umber-200 mx-1.5'>|</span>
          <a href='https://github.com/prettyirrelevant' target='_blank' rel='noopener noreferrer' className='text-[var(--color-accent)] hover:underline'>github.com/prettyirrelevant</a>
          <span className='text-umber-200 mx-1.5'>|</span>
          <a href='https://www.linkedin.com/in/isaac-adewumi' target='_blank' rel='noopener noreferrer' className='text-[var(--color-accent)] hover:underline'>in/isaac-adewumi</a>
        </p>
      </header>

      <p className='text-umber-400 print:text-umber-600' style={{ fontFamily: 'var(--serif)', fontVariationSettings: '"wght" 480', fontWeight: 400 }}>
        Software engineer with 5+ years of experience building backend systems, developer tools, crypto payment infrastructure, and production web applications across blockchain, fintech, and open source. I've spent much of my career at Rotki, cofounded a crypto payments product, won several global hackathons, and shipped side projects in Rust, Go, and TypeScript.
      </p>

      <Section title='Experience'>
        <Job title='Python Backend Engineer' company='Rotki Solutions GmbH' location='Remote, Berlin' period='Oct 2024 - Mar 2026'>
          <li className='pl-1.5'>Built Solana support across Rotki's backend, including spam token filtering, transaction decoding, and chain-specific asset handling.</li>
          <li className='pl-1.5'>Designed and implemented historical balance tracking from scratch using archive node queries, balance snapshotting, cache invalidation, and normalized accounting logic.</li>
          <li className='pl-1.5'>Refactored fiat valuation logic from hardcoded USD assumptions into user-selected currency support across 10+ API endpoints.</li>
          <li className='pl-1.5'>Added and maintained protocol integrations for Balancer v1/v2, Aura Finance, Beefy, Yearn, StakeDAO, and other DeFi systems.</li>
          <li className='pl-1.5'>Expanded exchange and wallet support with Coinbase ED25519 API key handling, Binance Convert trade support, and additional transaction parsing paths.</li>
        </Job>

        <Job title='Software Engineer' company='Unyte' location='Nigeria' period='Jul 2024 - Oct 2024'>
          <li className='pl-1.5'>Built backend features for insurance policy management and provider onboarding on an API-first insurance infrastructure platform.</li>
          <li className='pl-1.5'>Developed workflows that helped businesses embed and distribute insurance products across African markets.</li>
          <li className='pl-1.5'>Worked across backend and product requirements to turn insurance operations into maintainable APIs and internal tooling.</li>
        </Job>

        <Job title='Technical Cofounder & Lead Engineer' company='FlashPay' location='Part-time, Remote' period='May 2022 - 2024'>
          <li className='pl-1.5'>Cofounded FlashPay, one of the early Algorand payment-link platforms, and helped raise over $40K from the Algorand Foundation.</li>
          <li className='pl-1.5'>Led development of the Django backend service for payment links, merchant APIs, API keys, wallet setup, transaction verification, webhooks, and revenue reporting.</li>
          <li className='pl-1.5'>Built payment lifecycle infrastructure for creating, tracking, verifying, and reconciling Algorand-based payments.</li>
          <li className='pl-1.5'>Developed the JavaScript SDK used by merchants to initialize payments, configure supported assets, handle callbacks, and integrate FlashPay into client applications.</li>
          <li className='pl-1.5'>Designed developer-facing API flows and maintained integration documentation for merchants accepting ALGO, USDC, USDT, and other Algorand-based assets.</li>
          <li className='pl-1.5'>Owned backend architecture, SDK design, API flows, and technical delivery as technical cofounder and lead engineer.</li>
        </Job>

        <Job title='Python Backend Engineer' company='Rotki Solutions GmbH' location='Remote, Berlin' period='Apr 2022 - Apr 2023'>
          <li className='pl-1.5'>Replaced Rotki's Uniswap V3 subgraph dependency with a fully on-chain data retrieval approach.</li>
          <li className='pl-1.5'>Reduced Electron application memory usage by ~30% by revamping asset management endpoints and response payload handling.</li>
          <li className='pl-1.5'>Added support for Average Cost Basis and HIFO accounting methods.</li>
          <li className='pl-1.5'>Integrated transaction decoding for Uniswap V2/V3, Sushiswap, Curve, MakerDAO, and related DeFi protocols.</li>
          <li className='pl-1.5'>Added Taproot BTC address support, per-user notes, and spam NFT filtering.</li>
        </Job>

        <Job title='Full Stack Engineer' company='DeCHO' location='Remote, Lagos' period='Jan 2022 - Apr 2022'>
          <li className='pl-1.5'>Built a Swift native module to integrate the Algorand SDK into a React Native application.</li>
          <li className='pl-1.5'>Developed backend API endpoints with Django REST Framework for core product workflows.</li>
          <li className='pl-1.5'>Implemented wallet integration flows for the web application.</li>
          <li className='pl-1.5'>Contributed across mobile, web, and backend surfaces for an Algorand grant-backed product.</li>
        </Job>

        <Job title='Software Engineer' company='Saber Creative Agency' location='Remote' period='Oct 2021 - Jan 2022'>
          <li className='pl-1.5'>Built backend endpoints and UI components for a hospitality management application using Django.</li>
          <li className='pl-1.5'>Set up CI workflows and improved test coverage across core application paths.</li>
          <li className='pl-1.5'>Worked across frontend and backend tasks in a small delivery-focused engineering team.</li>
        </Job>

        <Job title='Django Developer Intern' company='Mul-T-Lock Nigeria' location='Hybrid, Lagos' period='Jan 2021 - Mar 2021'>
          <li className='pl-1.5'>Built a product landing page using Django.</li>
          <li className='pl-1.5'>Worked on an authentication system for IoT device integration using Django Channels.</li>
        </Job>

        <Job title='Freelance Software Developer' location='Remote' period='Jan 2020 - Dec 2020'>
          <li className='pl-1.5'>Built web applications and backend systems for clients using Django, JavaScript, TypeScript, Flask, and other web technologies.</li>
          <li className='pl-1.5'>Developed Django-based e-commerce websites, including product catalogues, checkout flows, admin tooling, and payment-related workflows.</li>
          <li className='pl-1.5'>Built a real-time end-to-end encrypted CLI chat application for client use, covering message transport, encryption flow, and terminal-based user interaction.</li>
          <li className='pl-1.5'>Worked directly with clients to scope requirements, deliver production-ready features, and maintain deployed applications.</li>
        </Job>
      </Section>

      <Section title='Hackathon Wins'>
        <ul className='list-disc list-outside marker:text-umber-200 pl-5'>
          <Hackathon project='BridgeBloc' event='DevX EMEA' eventHref='https://dorahacks.io/hackathon/devxemea/results' result='won $9,000 (Circle + Polygon)' />
          <Hackathon project='Brazen' event="Anchor Embedded Finance Hackathon" eventHref='https://getanchor.co/blog/open.html?slug=anchor-embedded-finance-hackathon-2023-a-collision-of-creativity-and-innovation&id=65e9a0a473829fd08cd977a1' result='1st place, won ₦1,000,000' />
          <Hackathon project='Optimart' event='XRPL Hackathon' eventHref='https://dorahacks.io/hackathon/xrpl-hackathon/results' result='winner' />
          <Hackathon project='ContractWatch' event='Scroll v0rtex Hackathon' eventHref='https://dorahacks.io/hackathon/v0rtex-01/detail' result='prize winner' />
          <Hackathon project='Wrapped Naira' event='Scroll v0rtex Hackathon' eventHref='https://dorahacks.io/hackathon/v0rtex-01/detail' result='prize winner' />
        </ul>
      </Section>

      <Section title='Projects'>
        <ul className='list-disc list-outside marker:text-umber-200 pl-5'>
          <Project name='Kizami' href='https://github.com/prettyirrelevant/kizami' description='Rust service for block-by-timestamp lookups across 30+ EVM chains' />
          <Project name='Decodify' href='https://github.com/prettyirrelevant/decodify' description='Chrome extension for human-readable Etherscan transaction decoding' />
          <Project name='Wakaru' href='https://github.com/prettyirrelevant/wakaru' description='Client-side bank statement analyzer with natural language queries' />
          <Project name='Guessx' href='https://github.com/prettyirrelevant/guessx' description='Real-time multiplayer guessing game for 2-20 players' />
          <Project name='Neuron' href='https://github.com/prettyirrelevant/final-year-project' description='BLE-based attendance system using ESP32 (final year project)' />
        </ul>
      </Section>

      <Section title='Skills' className='print:hidden'>
        <div className='flex flex-wrap gap-1.5'>
          {[
            'Python', 'Rust', 'TypeScript', 'Go',
            'Django', 'Flask', 'Next.js', 'React', 'React Native',
            'SQL', 'Docker', 'Git',
            'Solidity', 'Vyper', 'PyTeal',
          ].map((skill) => (
            <span key={skill} className='text-xs px-2 py-0.5 rounded-sm bg-umber-100 text-umber-400 print:text-umber-600 print:border print:border-umber-200 print:bg-transparent'>
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section title='Education'>
        <div className='flex flex-wrap items-baseline justify-between gap-x-3'>
          <p className='font-semibold text-umber-600' style={{ fontFamily: 'var(--heading)', fontVariationSettings: '"wght" 600, "opsz" 32' }}>
            B.Sc. Electrical & Electronics Engineering
            <span className='font-normal text-umber-400 print:text-umber-600' style={{ fontFamily: 'var(--serif)', fontVariationSettings: '"wght" 480', fontWeight: 400 }}> at Obafemi Awolowo University</span>
          </p>
          <p className='text-xs text-umber-300 print:text-umber-600'>2018 - 2024</p>
        </div>
      </Section>
    </div>
  )
}
