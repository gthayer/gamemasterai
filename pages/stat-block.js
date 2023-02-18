import Head from "next/head";
import styles from '../styles/Home.module.css';
import Chat from "../components/forms/chat";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Dungeons of Drakkenheim AI Assistant - Make a Stat Block</title>
      </Head>

      <main className={styles.main}>
        <div className="py-8 px-8">
          <h1>Make a Stat Block</h1>

          <div className="py-8 px-8">
            I can make 5E stat blocks for you. Just tell about the creature, and I'll do the rest. Here are some examples:
            <pre className="py-2 px-4 bg-slate-100">
              Speedy Blue Hedgehog with Spin Attack<br/>
              CR 9 Drow Gunslinger<br/>
              Undead exploding parrot
            </pre>
          </div>

          <Chat endpoint='/api/stat-block'/>
        </div>
      </main>
    </div>
  );
}
