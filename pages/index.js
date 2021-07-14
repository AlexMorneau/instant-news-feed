import Head from 'next/head';
import Image from 'next/image';
import router from 'next/router';
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
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400&family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar />


      <div className={styles.HomeMain}>
        
        <div 
          className={styles.HomeContainer}
          onClick={() => router.push('/newsfeed/1')}>
          <h2 className={styles.HomeTitle}>Instant News Browsing</h2>
          <p className={styles.HomeDescription}>Quickly and easily browse Canadian news. Scroll (horizontally!) through an array of articles, use the keyword filter to help tailor your results, and explore a number of pages. When you find an article you would like to read, simply click on it to open it in a new browser tab.</p>
          <p className={styles.HomeBegin}>( click this box to begin )</p>
        </div>
      </div>
      
    </div>
  )
}
