import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>To Do Or Not To Do</title>
        <meta name="description" content="Add you task and stay productive!" />
      </Head>

      <main className={styles.main}> hello to do app</main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
