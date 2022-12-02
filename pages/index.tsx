import { GetServerSideProps } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Letter } from "../types";

export default function Home({ letters }: any) {
  return (
    <>
      <p className={styles.description}>
        Read the letters wrighted to Santa Claus, you can also wright some
      </p>

      <div className={styles.grid}>
        {letters?.length > 0 ? (
          letters.map(({ id, description, author }: Letter) => (
            <div key={id} className={styles.card}>
              <div className={styles.cardHeader}>
                {author?.image ? (
                  <Image
                    src={`${author?.image}.png`}
                    alt="user"
                    width={50}
                    height={50}
                  />
                ) : (
                  <Image
                    src="/background-1.jpg"
                    alt="user"
                    width={50}
                    height={50}
                  />
                )}

                <h2>{author?.name}</h2>
              </div>
              <p>{description}</p>
            </div>
          ))
        ) : (
          <p>No letters found</p>
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.ABSOLUTE_PATH_ROOT}/api/letters/get`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  const letters: Letter[] = data.map(({ data, ts }: any) => {
    return {
      id: ts,
      ...data,
    };
  });

  return { props: { letters } };
};
