'use client'
import Image from "next/image";
import Blog from "./blog";
import "./page.scss";
import Link from 'next/link';
import { useState } from "react";

export default function Home() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <header className="Header">
        <div className="Header__header">
          <div className="Header__image"></div>
          <div className="gradient"></div>
          <div className="Header__content">
            <h1>Claudine Manrique</h1>
            <span className="Header__subtitle">Ecrivain-e, artiste, développeur-se</span>
          </div>
          <span className="Header__nav" onClick={() => setOpenNav(true)}>&#9776;</span>
        </div>
      </header>
      <nav className={"Nav "+ (openNav ? 'show' : 'hidden')}>
        <a className="Nav__close" onClick={() => setOpenNav(false)}>&times;</a>
        <ul className="Nav__items">
          <li className="Nav__item"><Link href="/qui-suis-je">qui suis-je</Link></li>
          <li className="Nav__item"><Link href="/blog">blog</Link></li>
          <li className="Nav__item"><Link href="/portefolio">portefolio développeuse</Link></li>
          <li className="Nav__item"><Link href="/publications">publications</Link></li>
          <li className="Nav__item"><Link href="/contact">contact</Link></li>
        </ul>
      </nav>
      <main className="">
      </main>
      <footer className="">
      </footer>
    </>
  );
}
