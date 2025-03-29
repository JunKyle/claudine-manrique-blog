import philosopher from 'next/font/local';
import type { Metadata } from 'next'
import "./globals.css";
import "./page.scss";
import Link from 'next/link';
import dynamic from 'next/dynamic';

const HeaderNavComponent = dynamic(() => import('./headernav/layout'));

const localFont = philosopher({
  src: [
    {
      path: '../../public/fonts/philosopher/Philosopher-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/philosopher/Philosopher-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-philosopher'
})
 
export const metadata: Metadata = {    
  metadataBase: new URL(`https://www.claudine-manrique.com`),
  title: 'Claudine Manrique | mon site',
  description: 'Portefolio et blog de Claudine Manrique',
  alternates: {
      canonical: './',
  },
  openGraph: {
    title: 'Claudine Manrique | Website',
    description: 'Portefolio et blog de Claudine Manrique',
    url: 'https://www.claudine-manrique.com',
    siteName: 'claudine-manrique',
    images: [
      {
        url: 'https://claudine-manrique.com/images/header.png',
        width: 800,
        height: 600,
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={`${localFont.variable} font-sans`}>        
        <HeaderNavComponent />
        {children}
        <footer className="Footer">
          <ul className="Footer__items">
            <li className="Footer__item"><Link href="/contact">s&apos;abonner à la newsletter</Link></li>
            <li className="Footer__item"><Link href="/mentions-legales">mentions légales</Link></li>
            <li className="Footer__item"><Link href="/contact">contact</Link></li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
