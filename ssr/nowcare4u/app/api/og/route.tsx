import { ImageResponse } from 'next/og';
// Next.js config might complain if this is not present depending on the version
export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic params
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'NowCare4U - Next-Generation Healthcare Platform';

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#ffffff',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundImage:
              'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: 60,
                fontStyle: 'normal',
                letterSpacing: '-0.025em',
                color: '#2563eb', // Brand color
                marginTop: 30,
                padding: '0 120px',
                lineHeight: 1.4,
                whiteSpace: 'pre-wrap',
                fontWeight: 800,
              }}
            >
              NowCare4U
            </div>
          </div>
          <div
            style={{
              fontSize: 40,
              fontStyle: 'normal',
              color: 'black',
              marginTop: 20,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
