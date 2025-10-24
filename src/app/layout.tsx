import type { Metadata } from 'next';
import { Geist, Geist_Mono, Crimson_Pro } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Cursor, CursorProvider } from '@/components/ui/shadcn-io/animated-cursor';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const crimsonPro = Crimson_Pro({
  variable: '--font-crimson-pro',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'vedaantrajoo',
  description: "vedaantrajoo's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta
          httpEquiv='Content-Security-Policy'
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://use.typekit.net https://dev.vedaantrajoo.com; style-src 'self' 'unsafe-inline' https://use.typekit.net https://fonts.googleapis.com; font-src 'self' https://use.typekit.net https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self' https://dev.vedaantrajoo.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests"
        />
        <link rel='stylesheet' href='https://use.typekit.net/ohm3phs.css' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimsonPro.variable} antialiased`}
      >
        <CursorProvider>
          <Cursor>
            <svg
              className='size-6 text-blue-500'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 40 40'
            >
              <path
                fill='currentColor'
                d='M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z'
              />
            </svg>
          </Cursor>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
          </ThemeProvider>
        </CursorProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
