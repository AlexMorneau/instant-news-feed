// notation [] for requiring URL id
// this page is only accessed when a parameter is provided:
// <site>/newsfeed/2

import Head from 'next/head';
import Navbar from '../../components/navbar/navbar';
import Search from '../../components/search/search';
import HorizontalScroll from 'react-scroll-horizontal';
import styles from '../../styles/newsfeed.module.css';

const NewsFeed = ({ pageNumber, articles }) => {
    return (
        <div className="page-container">
            <Head>
                <title>News | Page: {pageNumber}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400&family=Bebas+Neue&display=swap" rel="stylesheet"></link>
                
            </Head>

            <Navbar />


            <HorizontalScroll>
            <div className={styles.NewsMain}>
            {
                articles.map((article, index) => (
                    <div className={styles.NewsContainer} key={index}>
                        {
                            // display article image if it exists
                            !!article.urlToImage && 
                            <img 
                                className={styles.NewsImage}
                                src={article.urlToImage}
                            />
                        }
                        <h2 className={styles.NewsTitle}>{article.title}</h2>
                        <p className={styles.NewsDesc}>{article.description}</p>
                        
                    </div>
                ))
            }
            </div>
            </HorizontalScroll>
        </div>

        
    )
}

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.pageid;

    if (!pageNumber || pageNumber < 1 || pageNumber > 100) {
        return {
            props: {
                pageNumber: 1,
                articles: []
            }
        }
    }

    // reference: https://newsapi.org/docs/endpoints/top-headlines
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ca&pageSize=100&sortBy=popularity&page=${pageNumber}`,
    {
        headers: {
            Authorization: `Bearer ${process.env.NEWS_API_KEY}`
        }
    });

    const { articles } = await res.json();

    return {
        props: {
            pageNumber: Number.parseInt(pageNumber),
            articles
        }
    }
}

export default NewsFeed;
