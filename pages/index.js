import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,700&display=swap"
          rel="stylesheet"
        />
        <title>To Do Or Not To Do</title>
        <meta name="description" content="Add you task and stay productive!" />
      </Head>

      <main className={styles.main}> hello to do app</main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
