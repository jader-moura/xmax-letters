import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <p className={styles.description}>
        Read the letters wrighted to Santa Claus, you can also wright some
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Image src="/background-1.jpg" alt="user" width={50} height={50} />
            <h2>Jaqueline Moura</h2>
          </div>
          <p>
            I wish all the children in the world a merry Christmas and a 2023
            with lots of toys
          </p>
        </div>
      </div>
    </>
  );
}
