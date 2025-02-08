"use client"
import philosopher from 'next/font/local';
import "./globals.css";
import "./page.scss";
import { useState } from "react";
import Link from 'next/link';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openNav, setOpenNav] = useState(false);
  return (
    <html lang="en">
      <body className={`${localFont.variable} font-sans`}>
        <header className="Header">
          <Link className="Header__link" href="/">
            <div className="Header__image"></div>
            <div className="gradient"></div>
            <div className="Header__content">
              <h1>Claudine Manrique</h1>
              <span className="Header__subtitle">Ecrivain-e, artiste, développeur-se</span>
            </div>
            <span className="Header__nav" onClick={() => setOpenNav(true)}>&#9776;</span>
          </Link>
        </header>
        <nav className={"Nav "+ (openNav ? 'show' : 'hidden')}>
          <a className="Nav__close" onClick={() => setOpenNav(false)}>&times;</a>
          <ul className="Nav__items">
            <li className="Nav__item"><Link onClick={() => setOpenNav(false)} href="/qui-suis-je">qui suis-je</Link></li>
            <li className="Nav__item"><Link onClick={() => setOpenNav(false)} href="/blog">blog</Link></li>
            <li className="Nav__item"><Link onClick={() => setOpenNav(false)} href="/portefolio">portefolio développeuse</Link></li>
            <li className="Nav__item"><Link onClick={() => setOpenNav(false)} href="/publications">publications</Link></li>
            <li className="Nav__item"><Link onClick={() => setOpenNav(false)} href="/contact">contact</Link></li>
          </ul>
        </nav>
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
