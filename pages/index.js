import Head from "next/head";
import styles from '../styles/Home.module.css';
import StatBlockGenerator from "../components/statBlockGenerator";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>GamemasterAI - 5e Monster Summoner</title>
      </Head>

      <Header/>

      <main className={styles.main}>
        <div className="monsterSummoner py-8 px-8 container">
          <h1 className="text-4xl text-center py-4 text-tan">5e Monster Summoner</h1>
          <p className="text-center py-4 text-tan">Call upon the eldrich black magic of Artifical Intellegence and summon from the shadows a creature of your darkest desires, birthed from the void, into existance.</p>
          <StatBlockGenerator/>
        </div>
      </main>
    </>
  );
}
