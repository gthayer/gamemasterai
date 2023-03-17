import Head from "next/head";
import styles from '../styles/Home.module.css';
import CheckoutForm from '../components/checkout/checkoutForm';

export default function Checkout() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gamemaster AI - Checkout</title>
      </Head>
      <main className={styles.main}>
        <div className="py-8 px-8">
          <h1 className="text-4xl">Checkout</h1>
		  <CheckoutForm/>
        </div>
      </main>
    </div>
  );
}
