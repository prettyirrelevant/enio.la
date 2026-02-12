import withMDX from '@next/mdx'
import { NextConfig } from 'next'

export default withMDX()({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  turbopack: {},
  redirects: async () => [
    {
      source: '/posts/:slug',
      destination: '/writings/:slug',
      permanent: false,
    },
    {
      source: '/blog/:slug',
      destination: '/writings/:slug',
      permanent: false,
    },
    {
      source: '/blog',
      destination: '/writings',
      permanent: false,
    },
  ],
  experimental: {
    mdxRs: {
      mdxType: 'gfm',
    },
    turbopackFileSystemCacheForDev: true,
    turbopackFileSystemCacheForBuild: true,
  },
  transpilePackages: ['shiki'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'enio.la',
      },
    ],
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
} satisfies NextConfig)
