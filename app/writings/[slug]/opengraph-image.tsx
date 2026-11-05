import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const fontPath = path.join(process.cwd(), 'app', '_fonts', 'Inter-Medium.ttf')
const fontBuffer = readFileSync(fontPath)
const fonts = [
  {
    name: 'Inter',
    data: fontBuffer,
    style: 'normal' as const,
    weight: 600 as const,
  },
]

export default async function OpenGraphImage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const { metadata } = await import(`../_articles/${params.slug}.mdx`)

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '60px 80px 80px',
        background: '#fcfcfc',
        fontFamily: 'Inter',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: '#0e0f11',
            lineHeight: 1.4,
            maxWidth: 1000,
            textWrap: 'pretty',
            letterSpacing: -0.6,
          }}
        >
          {metadata.title}
        </div>
        {metadata.description && (
          <div
            style={{
              fontSize: 28,
              color: '#4a515b',
              marginTop: 36,
              maxWidth: 900,
              lineHeight: 1.5,
              letterSpacing: -0.2,
            }}
          >
            {metadata.description}
          </div>
        )}
      </div>
      <div
        style={{
          fontSize: 20,
          color: '#8c95a1',
        }}
      >
        enio.la
      </div>
    </div>,
    {
      ...size,
      fonts,
    },
  )
}
