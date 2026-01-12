import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const MAX_TITLE_LENGTH = 100;

async function loadGoogleFont(font: string, text: string) {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const resource = css.match(
      /src: url\((.+)\) format\('(opentype|truetype)'\)/,
    );

    if (resource) {
      const response = await fetch(resource[1]);
      if (response.status === 200) {
        return await response.arrayBuffer();
      }
    }
  } catch {
    // Fall through to return undefined
  }
  return undefined;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawTitle = searchParams.get('title');
  const title = rawTitle?.slice(0, MAX_TITLE_LENGTH);
  const text = title ? `eniola • ${title}` : 'eniola • home';

  const fontData = await loadGoogleFont('Geist Mono', text);

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#111',
        fontFamily: fontData ? 'Geist Mono' : 'monospace',
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
          {text}
        </h1>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: fontData
        ? [
            {
              name: 'Geist Mono',
              data: fontData,
              style: 'normal',
            },
          ]
        : [],
    },
  );
}
