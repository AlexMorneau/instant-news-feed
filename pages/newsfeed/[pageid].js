// notation [] for requiring URL id
// this page is only accessed when a parameter is provided:
// <site>/newsfeed/2

import styles from '../../styles/newsfeed.module.css';

const NewsFeed = ({ pageNumber, articles }) => {
    console.log(articles);
    return (
        <div className={styles.main}>
        {
            articles.map((article, index) => (
                <div key={index} className={styles.articleWrapper}>
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    {
                        !!article.urlToImage && <img src={article.urlToImage} />
                    }
                </div>
            ))
        }
            
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.pageid;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                pageNumber: 1,
                articles: []
            }
        }
    }

    // reference: https://newsapi.org/docs/endpoints/top-headlines
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ca&pageSize=5&sortBy=popularity&page=${pageNumber}`,
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
