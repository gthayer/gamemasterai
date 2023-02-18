import Head from "next/head";
import styles from '../styles/Home.module.css';
import Chat from "../components/forms/chat";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <div className="py-8 px-8">
          <h3>Vanilla</h3>
          <Chat endpoint='/api/vanilla'/>
        </div>
      </main>
    </div>
  );
}
