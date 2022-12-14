import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { getSession, signOut } from "next-auth/react";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>Xmax Letters</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Link href="/">
        <div className={styles.wrapper}>
          <Image src="/christmas-hat.png" width={80} height={80} alt="Logo" />
          <h1 className={styles.title}>Xmax Letters</h1>
        </div>
      </Link>
      {pathname === "/" && (
        <Link href="/new-letter" className={styles.newLetter}>
          Wright letter
        </Link>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    signOut();
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
