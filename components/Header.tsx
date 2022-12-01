import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <Image src="/christmas-hat.png" width={80} height={80} alt="Logo" />
      </Link>
      <h1 className={styles.title}>Letters to Santa Claus</h1>
      {pathname === "/" && (
        <Link href="/new-letter" className={styles.newLetter}>
          Wright letter
        </Link>
      )}
    </div>
  );
}
