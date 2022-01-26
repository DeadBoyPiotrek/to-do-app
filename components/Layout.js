import Navbar from "./Navbar";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
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
      <Navbar />

      <main>{children}</main>
    </>
  );
}
