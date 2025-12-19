import type { Metadata } from 'next';
import { Geist, Geist_Mono, Crimson_Pro } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { Cursor, CursorProvider } from '@/components/ui/shadcn-io/animated-cursor';
import { NavigationHeader } from '@/components/layout';
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

/**
 * Root layout composing global providers and application chrome.
 *
 * Renders the HTML document with:
 * - Typekit fonts and configured font variables
 * - Custom animated cursor provider
 * - Theme provider wrapping the navigation header and main content
 * - Analytics and performance monitoring (SpeedInsights, Analytics)
 *
 * @param children - The page or application content to render inside the layout's main element
 * @returns The root HTML document element for the application
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
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
              <circle cx='20' cy='20' r='15' fill='currentColor' />
            </svg>
          </Cursor>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <div className='min-h-screen'>
              <NavigationHeader />
              <main>{children}</main>
            </div>
          </ThemeProvider>
        </CursorProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
