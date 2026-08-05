"use client";

import posthog from "posthog-js";

function PrintButton() {
  return (
    <button
      onClick={() => {
        posthog.capture("resume_print_requested");
        window.print();
      }}
      className="print:hidden text-xs text-umber-300 hover:text-umber-500 transition-colors cursor-pointer"
    >
      print / save as pdf
    </button>
  );
}

function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mt-10 print:mt-3 first:mt-0 ${className || ""}`}>
      <h2
        className="text-xs uppercase tracking-widest text-umber-300 print:text-umber-600 mb-4 print:mb-1.5 print:text-[10px]"
        style={{ fontFamily: "var(--sans)" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function RoleHeading({
  title,
  company,
  period,
  location,
}: {
  title: string;
  company?: string;
  period: string;
  location?: string;
}) {
  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <p
          className="font-semibold text-umber-600"
          style={{
            fontFamily: "var(--heading)",
            fontVariationSettings: '"wght" 600, "opsz" 32',
          }}
        >
          {title}
          {company && (
            <span
              className="font-normal text-umber-400 print:text-umber-600"
              style={{
                fontFamily: "var(--serif)",
                fontVariationSettings: '"wght" 480',
                fontWeight: 400,
              }}
            >
              {" "}
              at {company}
            </span>
          )}
        </p>
        <p className="text-xs text-umber-300 print:text-umber-600 whitespace-nowrap">
          {location && (
            <span className="hidden print:inline">{location} &middot; </span>
          )}
          {period}
        </p>
      </div>
      {location && (
        <p className="text-xs text-umber-300 print:hidden">{location}</p>
      )}
    </>
  );
}

function Job({
  title,
  company,
  location,
  period,
  children,
}: {
  title: string;
  company?: string;
  location?: string;
  period: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-6 print:mb-2 last:mb-0 print:break-inside-avoid">
      <RoleHeading
        title={title}
        company={company}
        period={period}
        location={location}
      />
      {children && (
        <ul className="mt-2 print:mt-1 list-disc list-outside marker:text-umber-200 pl-5 text-umber-500">
          {children}
        </ul>
      )}
    </div>
  );
}

function EarlierRole({
  title,
  company,
  period,
  summary,
}: {
  title: string;
  company?: string;
  period: string;
  summary: string;
}) {
  return (
    <div className="mb-4 print:mb-1.5 last:mb-0 print:break-inside-avoid">
      <RoleHeading title={title} company={company} period={period} />
      <p className="text-umber-500 mt-1 print:mt-0.5">{summary}</p>
    </div>
  );
}

function Hackathon({
  project,
  event,
  eventHref,
  result,
}: {
  project: string;
  event: string;
  eventHref: string;
  result: string;
}) {
  return (
    <li className="pl-1.5">
      <span
        className="font-semibold text-umber-600"
        style={{
          fontFamily: "var(--heading)",
          fontVariationSettings: '"wght" 600, "opsz" 32',
        }}
      >
        {project}
      </span>
      <span
        className="text-umber-400 print:text-umber-600"
        style={{
          fontFamily: "var(--serif)",
          fontVariationSettings: '"wght" 480',
          fontWeight: 400,
        }}
      >
        {" "}
        at{" "}
        <a
          href={eventHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent)] hover:underline"
        >
          {event}
        </a>
      </span>
      <span className="text-umber-300 print:text-umber-600"> : {result}</span>
    </li>
  );
}

function Project({
  name,
  href,
  description,
}: {
  name: string;
  href: string;
  description: string;
}) {
  return (
    <li className="pl-1.5">
      <a
        href={href}
        onClick={() => posthog.capture("portfolio_project_opened", { project_name: name })}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[var(--color-accent)] hover:underline"
        style={{
          fontFamily: "var(--heading)",
          fontVariationSettings: '"wght" 600, "opsz" 32',
        }}
      >
        {name}
      </a>
      <span className="text-umber-400 print:text-umber-600">
        {" "}
        : {description}
      </span>
    </li>
  );
}

export function CV() {
  return (
    <div className="print:text-[12px] print:leading-[1.3]">
      <header className="mb-4 print:mb-2">
        <div className="flex items-baseline justify-between">
          <h1
            className="font-semibold text-umber-600"
            style={{
              fontFamily: "var(--heading)",
              fontVariationSettings: '"wght" 600, "opsz" 32',
            }}
          >
            Isaac Adewumi
          </h1>
          <PrintButton />
        </div>
        <p className="text-umber-400 print:text-umber-600 mt-1 text-xs">
          Lagos, Nigeria
          <span className="text-umber-200 mx-1.5">|</span>
          <a
            href="mailto:hi@enio.la"
            onClick={() => posthog.capture("contact_email_clicked")}
            className="text-[var(--color-accent)] hover:underline"
          >
            hi@enio.la
          </a>
          <span className="text-umber-200 mx-1.5">|</span>
          <a
            href="https://github.com/prettyirrelevant"
            onClick={() => posthog.capture("social_profile_clicked", { platform: "github" })}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            github.com/prettyirrelevant
          </a>
          <span className="text-umber-200 mx-1.5">|</span>
          <a
            href="https://www.linkedin.com/in/isaac-adewumi"
            onClick={() => posthog.capture("social_profile_clicked", { platform: "linkedin" })}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            in/isaac-adewumi
          </a>
        </p>
      </header>

      <p
        className="text-umber-400 print:text-umber-600"
        style={{
          fontFamily: "var(--serif)",
          fontVariationSettings: '"wght" 480',
          fontWeight: 400,
        }}
      >
        Backend engineer in crypto, fintech, and open source since 2020. Most of
        that time at Rotki, on accounting, chain support, and DeFi decoding. I
        cofounded an Algorand payments product and ship side projects in Python,
        Rust, Go, and TypeScript.
      </p>

      <Section title="Experience">
        <Job
          title="Python Backend Engineer"
          company="Rotki Solutions GmbH"
          location="Remote, Berlin"
          period="Oct 2024 - Mar 2026"
        >
          <li className="pl-1.5">
            Shipped Solana support end to end: transaction decoding, spam token
            filtering, and chain-specific asset handling.
          </li>
          <li className="pl-1.5">
            Delivered historical balance tracking from scratch: transaction
            replay for fine-grained balances, archive node queries for native
            and ERC20 balances, with snapshotting and cache invalidation
            underneath.
          </li>
          <li className="pl-1.5">
            Migrated 10+ API endpoints off hardcoded USD valuation to a
            user-selected display currency.
          </li>
          <li className="pl-1.5">
            Integrated Balancer v1/v2, Aura Finance, Beefy, Yearn, and StakeDAO,
            plus Coinbase ED25519 API keys and Binance Convert trades.
          </li>
        </Job>

        <Job
          title="Software Engineer"
          company="Unyte"
          location="Nigeria"
          period="Jul 2024 - Oct 2024"
        >
          <li className="pl-1.5">
            Delivered policy management and provider onboarding for an API-first
            insurance platform.
          </li>
          <li className="pl-1.5">
            Built the distribution workflows partners used to embed insurance
            products across African markets.
          </li>
        </Job>

        <Job
          title="Technical Cofounder & Lead Engineer"
          company="FlashPay"
          location="Part-time, Remote"
          period="May 2022 - 2024"
        >
          <li className="pl-1.5">
            Cofounded an early Algorand payment-link platform on an Algorand
            Foundation grant.
          </li>
          <li className="pl-1.5">
            Designed and shipped the Django backend: payment links, merchant
            APIs, API keys, wallet setup, transaction verification, webhooks,
            and revenue reporting.
          </li>
          <li className="pl-1.5">
            Ran the payment lifecycle on-chain: creation, tracking,
            verification, and reconciliation.
          </li>
          <li className="pl-1.5">
            Published the merchant JavaScript SDK, its API surface, and the
            integration docs.
          </li>
        </Job>

        <Job
          title="Python Backend Engineer"
          company="Rotki Solutions GmbH"
          location="Remote, Berlin"
          period="Apr 2022 - Apr 2023"
        >
          <li className="pl-1.5">
            Removed the Uniswap V3 subgraph dependency by moving retrieval fully
            on-chain.
          </li>
          <li className="pl-1.5">
            Cut Electron memory usage by about 30% by revamping asset management
            endpoints.
          </li>
          <li className="pl-1.5">
            Added Average Cost Basis and HIFO accounting, Taproot BTC addresses,
            and spam NFT filtering.
          </li>
          <li className="pl-1.5">
            Decoded transactions for Uniswap V2/V3, Sushiswap, Curve, and
            MakerDAO.
          </li>
        </Job>

        <Job
          title="Full Stack Engineer"
          company="DeCHO"
          location="Remote, Lagos"
          period="Jan 2022 - Apr 2022"
        >
          <li className="pl-1.5">
            Built a Swift native module for the Algorand SDK in React Native,
            Django REST Framework endpoints, and web wallet integrations.
          </li>
        </Job>
      </Section>

      <Section title="Earlier">
        <EarlierRole
          title="Software Engineer"
          company="Saber Creative Agency"
          period="Oct 2021 - Jan 2022"
          summary="Django backend endpoints and UI for a hospitality management app. Set up CI and widened test coverage."
        />
        <EarlierRole
          title="Django Developer Intern"
          company="Mul-T-Lock Nigeria"
          period="Jan 2021 - Mar 2021"
          summary="Product landing page and an IoT device authentication system built with Django Channels."
        />
        <EarlierRole
          title="Freelance Software Developer"
          period="Jan 2020 - Dec 2020"
          summary="Django e-commerce sites, client web apps, and a real-time end-to-end encrypted CLI chat app."
        />
      </Section>

      <Section title="Hackathon Wins">
        <ul className="list-disc list-outside marker:text-umber-200 pl-5">
          <Hackathon
            project="BridgeBloc"
            event="DevX EMEA"
            eventHref="https://dorahacks.io/hackathon/devxemea/results"
            result="won a prize"
          />
          <Hackathon
            project="Brazen"
            event="Anchor Embedded Finance Hackathon"
            eventHref="https://getanchor.co/blog/open.html?slug=anchor-embedded-finance-hackathon-2023-a-collision-of-creativity-and-innovation&id=65e9a0a473829fd08cd977a1"
            result="1st place"
          />
          <Hackathon
            project="Optimart"
            event="XRPL Hackathon"
            eventHref="https://dorahacks.io/hackathon/xrpl-hackathon/results"
            result="won a prize"
          />
          <Hackathon
            project="ContractWatch"
            event="Scroll v0rtex Hackathon"
            eventHref="https://dorahacks.io/hackathon/v0rtex-01/detail"
            result="won a prize"
          />
          <Hackathon
            project="Wrapped Naira"
            event="Scroll v0rtex Hackathon"
            eventHref="https://dorahacks.io/hackathon/v0rtex-01/detail"
            result="won a prize"
          />
        </ul>
      </Section>

      <Section title="Projects">
        <ul className="list-disc list-outside marker:text-umber-200 pl-5">
          <Project
            name="Kizami"
            href="https://github.com/prettyirrelevant/kizami"
            description="Rust service for block-by-timestamp lookups across 30+ EVM chains"
          />
          <Project
            name="Decodify"
            href="https://github.com/prettyirrelevant/decodify"
            description="Chrome extension for human-readable Etherscan transaction decoding"
          />
          <Project
            name="Wakaru"
            href="https://github.com/prettyirrelevant/wakaru"
            description="Client-side bank statement analyzer with natural language queries"
          />
          <Project
            name="Guessx"
            href="https://github.com/prettyirrelevant/guessx"
            description="Real-time multiplayer guessing game for 2-20 players"
          />
          <Project
            name="Neuron"
            href="https://github.com/prettyirrelevant/final-year-project"
            description="BLE-based attendance system using ESP32 (final year project)"
          />
        </ul>
      </Section>

      <Section title="Skills" className="print:hidden">
        <div className="flex flex-wrap gap-1.5">
          {[
            "Python",
            "Rust",
            "TypeScript",
            "Go",
            "Django",
            "Flask",
            "Next.js",
            "React",
            "React Native",
            "SQL",
            "Docker",
            "Git",
            "Solidity",
            "Vyper",
            "PyTeal",
          ].map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-0.5 rounded-sm bg-umber-100 text-umber-400 print:text-umber-600 print:border print:border-umber-200 print:bg-transparent"
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <p
            className="font-semibold text-umber-600"
            style={{
              fontFamily: "var(--heading)",
              fontVariationSettings: '"wght" 600, "opsz" 32',
            }}
          >
            B.Sc. Electrical & Electronics Engineering
            <span
              className="font-normal text-umber-400 print:text-umber-600"
              style={{
                fontFamily: "var(--serif)",
                fontVariationSettings: '"wght" 480',
                fontWeight: 400,
              }}
            >
              {" "}
              at Obafemi Awolowo University
            </span>
          </p>
          <p className="text-xs text-umber-300 print:text-umber-600">
            2018 - 2024
          </p>
        </div>
      </Section>
    </div>
  );
}
