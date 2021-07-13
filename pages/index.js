import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar/navbar';

export default function Home() {
  return (
    <div className="page-container">
      <Head>
        <title>Your Favorite News Site</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Archivo&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar />

      {/* HOME PAGE CONTENT GOES HERE - DO THIS LAST - EXPLAIN APP */}
    </div>
  )
}
