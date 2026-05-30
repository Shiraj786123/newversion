import ScrollToTop from "@/src/components/ScrollToTop"; // Import the scroll component

import { Inter, Syne, DM_Sans } from 'next/font/google'; // Import the fonts natively
import { AuthProvider } from '@/src/context/AuthContext';
import WhatsappFloat from '@/src/components/WhatsappFloat';
import '@/src/index.css';
import '@/src/App.css';
import '@/src/styles/service-shared.css';
import "@/src/styles/navbar.css"; // Navbar styles second (ensures these take priority)


// Configure the font classes and weights
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-b', // Maps Inter to your body font variable if desired
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-h', // Maps Syne to your heading font variable
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm', // Auxiliary variable
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'ZonzocTech | AI Web Development, SEO & Digital Growth Agency',
    template: '%s | ZonzocTech',
  },
  description:
    'ZonzocTech builds high-converting websites, drives targeted traffic, and automates businesses with AI. Serving UK and US clients.',
  metadataBase: new URL('https://zonzoctech.com'),
  icons: {
    icon: '/zonzotech-favicon5.png?v=2', 
    shortcut: '/zonzotech-favicon5.png?v=2', // Added to support older browsers & pin layouts
    apple: '/zonzotech-favicon5.png?v=2',    // Added to support iOS bookmarks
  },
  openGraph: {
    siteName: 'ZonzocTech',
    images: [{ url: '/zonzotech-favicon5.png?v=2' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${dmSans.variable}`}>
      <head>
        {/* Next.js automatically handles link preconnect and stylesheet optimization */}
        <link rel="icon" href="/zonzotech-favicon5.png?v=2" type="image/png" />
      </head>
      {/* Applied inter.className here to keep the global typography context consistent across route changes */}
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <WhatsappFloat />
          
          {/* ScrollToTop component positioned globally */}
          <ScrollToTop /> 
        </AuthProvider>
      </body>
    </html>
  );
}