import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wassim Arfa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button className="btn btn-primary">DaisyUI Button</button>
    </div>
  );
}
