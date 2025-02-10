'use client';
import { useState } from "react";
import Link from 'next/link';

export default function HeaderNav({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
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
          <li className="Nav__item"><Link onClick={() => setOpenNav(false)} href="/portefolio-developpeuse">portefolio développeuse</Link></li>
          <li className="Nav__item"><Link onClick={() => setOpenNav(false)} href="/publications">publications</Link></li>
          <li className="Nav__item"><Link onClick={() => setOpenNav(false)} href="/contact">contact</Link></li>
        </ul>
      </nav>
      </>
  );
}