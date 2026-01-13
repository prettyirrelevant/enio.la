import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

const fontData = readFileSync(
  join(process.cwd(), 'src/assets/fonts/GeistMono-Regular.ttf'),
);

const PAGES = ['home', 'blog', 'projects'] as const;

export function generateStaticParams() {
  return PAGES.map((page) => ({
    page,
  }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ page: string }> },
) {
  const { page } = await params;
  const text = `eniola • ${page}`;

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#101010',
        fontFamily: 'Geist Mono',
        padding: '80px',
      }}
    >
      <span style={{ color: '#e0e0e0', fontSize: 64 }}>{page}</span>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <img
          src="https://enio.la/eniola.jpg"
          alt=""
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
          }}
        />
        <span style={{ color: '#606060', fontSize: 24 }}>enio.la</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Geist Mono',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
