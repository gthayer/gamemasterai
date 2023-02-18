import Head from "next/head";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gamemaster AI</title>
      </Head>

      <main className={styles.main}>
        <div className="py-8 px-8">
          <h1 className="text-4xl">Homepage</h1>
        </div>
      </main>
    </div>
  );
}
