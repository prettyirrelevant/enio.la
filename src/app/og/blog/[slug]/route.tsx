import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getPostBySlug, getPosts } from '@/lib/blog';
import { ImageResponse } from 'next/og';

const fontData = readFileSync(
  join(process.cwd(), 'src/assets/fonts/GeistMono-Regular.ttf'),
);

function formatDate(date: string) {
  return new Date(date)
    .toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
    .toLowerCase();
}

export function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const title = post?.metadata.title ?? "eniola's blog";
  const date = post?.metadata.date ? formatDate(post.metadata.date) : '';

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <span style={{ color: '#99FFE4', fontSize: 32 }}>*</span>
        <h1
          style={{
            color: '#d4d4d4',
            fontSize: 56,
            margin: 0,
            lineHeight: 1.2,
            maxWidth: '900px',
          }}
        >
          {title}
        </h1>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
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
          <span style={{ color: '#6e6e6e', fontSize: 24 }}>enio.la</span>
        </div>
        {date && (
          <span style={{ color: '#6e6e6e', fontSize: 24 }}>{date}</span>
        )}
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
