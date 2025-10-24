import type { Metadata } from 'next';
import { Geist, Geist_Mono, Crimson_Pro } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
