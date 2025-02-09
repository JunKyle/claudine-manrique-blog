import philosopher from 'next/font/local';
import type { Metadata } from 'next'
import "./globals.css";
import "./page.scss";
import Link from 'next/link';
import dynamic from 'next/dynamic';

const HeaderNavComponent = dynamic(() => import('./headerNav/layout'));

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
  title: 'Claudine Manrique',
  description: 'mon site',
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
      </head>
      <body className={`${localFont.variable} font-sans`}>        
        <HeaderNavComponent  />
        {children}
        <footer className="Footer">
          <ul className="Footer__items">
            <li className="Footer__item"><Link href="/contact">s'abonner à la newsletter</Link></li>
            <li className="Footer__item"><Link href="/contact">contact</Link></li>
            <li className="Footer__item"><Link href="/qui-suis-je">à propos</Link></li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
