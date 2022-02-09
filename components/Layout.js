import Navbar from './Navbar';
import Head from 'next/head';
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>To Do Or Not To Do</title>
        <meta name="description" content="Add you task and stay productive!" />
      </Head>
      <Navbar />

      <main>{children}</main>
    </>
  );
}
