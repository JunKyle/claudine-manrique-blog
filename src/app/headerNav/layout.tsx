'use client';
import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function HeaderNav() {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <header className={"Header " + (pathname !=="/" ? "Header--minified" : "")}>
        <Link className="Header__link" href="/">
          <div className="Header__image"></div>
          <div className="gradient"></div>
          <div className="Header__content">
            <h1 aria-label="Claudine Manrique">
             <span aria-hidden="true">C</span>
              <span aria-hidden="true">l</span>
              <span aria-hidden="true">a</span>
              <span aria-hidden="true">u</span>
              <span aria-hidden="true">d</span>
              <span aria-hidden="true">i</span>
              <span aria-hidden="true">n</span>
              <span aria-hidden="true">e</span>
              <span aria-hidden="true"> </span>
              <span aria-hidden="true">M</span>
              <span aria-hidden="true">a</span>
              <span aria-hidden="true">n</span>
              <span aria-hidden="true">r</span>
              <span aria-hidden="true">i</span>
              <span aria-hidden="true">q</span>
              <span aria-hidden="true">u</span>
              <span aria-hidden="true">e</span>
            </h1>
            <span className="Header__subtitle">Auteurice, artiste, développeur·se</span>
          </div>
        </Link>
        <span className="Header__nav" onClick={() => setOpenNav(true)}>&#9776;</span>
      </header>
      <nav className={"Nav "+ (openNav ? 'show' : 'hidden')}>
        <a className="Nav__close" onClick={() => setOpenNav(false)}>&times;</a>
        <ul className="Nav__items">
          <li className="Nav__item"><Link onClick={() => setOpenNav(false)} href="/blog">blog</Link></li>
          <li className="Nav__item"><Link onClick={() => setOpenNav(false)} href="/informatique">informatique</Link></li>
          <li className="Nav__item"><Link onClick={() => setOpenNav(false)} href="/bibliographie">bibliographie</Link></li>
          <li className="Nav__item"><Link onClick={() => setOpenNav(false)} href="/contact">contact</Link></li>
        </ul>
      </nav>
      </>
  );
}