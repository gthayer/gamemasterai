import Head from "next/head";
import styles from '../styles/Home.module.css';

async function buildFinetune(event) {
	event.preventDefault();
	const response = await fetch("/api/finetune", {
		method: "POST",
		headers: {
		"Content-Type": "application/json",
		},
	});
	const data = await response.json();
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gamemaster AI</title>
      </Head>

      <main className={styles.main}>
        <div className="py-8 px-8">
          <h1 className="text-4xl">Open AI Interface</h1>
          <form onSubmit={buildFinetune}>
            <input type="submit" value="Build Finetune" />
          </form>
        </div>
      </main>
    </div>
  );
}
