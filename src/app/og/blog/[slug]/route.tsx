import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getPostBySlug, getPosts } from '@/lib/blog';
import { ImageResponse } from 'next/og';

const fontData = readFileSync(
  join(process.cwd(), 'src/assets/fonts/GeistMono-Regular.ttf'),
);

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

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#101010',
        fontFamily: 'Geist Mono',
        padding: '40px',
        position: 'relative',
      }}
    >
      <img
        src="https://enio.la/eniola.jpg"
        alt="Profile"
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          maxWidth: '90%',
        }}
      >
        <span
          style={{
            color: '#ff6b35',
            fontSize: 48,
            flexShrink: 0,
          }}
        >
          *
        </span>
        <h1
          style={{
            fontSize: 48,
            color: '#fff',
            margin: 0,
            lineHeight: 1.2,
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            maxWidth: '100%',
          }}
        >
          {title}
        </h1>
      </div>
    </div>,
    {
      width: 1200,
      height: 600,
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
