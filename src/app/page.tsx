'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Blog from "./blog";
import "./page.scss";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="h1">Welcome to my website</h1>
        <Link href="/blog"> blog</Link>
      </main>
      <footer className={styles.footer}>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
        </div>
      </footer>
    </div>
  );
}
