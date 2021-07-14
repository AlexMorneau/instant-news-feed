import router from 'next/router';
import styles from './paginator.module.css';

const Paginator = ({ pageNumber }) => {
    return (
        <div className={styles.PaginatorContainer}>
        
            <img
                className={pageNumber === 1 ? styles.ArrowDisabled : styles.ArrowEnabled}
                src="/images/arrow_prev.svg" 
                onClick={() => {
                    if (pageNumber > 1) {
                        router.push(`/newsfeed/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
                    }
                }} />

            <div className={styles.PaginatorCurrentPage}> PAGE: ( {pageNumber} )</div>

            <img
                className={pageNumber === 30 ? styles.ArrowDisabled : styles.ArrowEnabled}
                src="/images/arrow_next.svg" 
                onClick={() => {
                    if (pageNumber < 30) {
                        router.push(`/newsfeed/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
                    }
                }} />
            
        </div>
    )
}

export default Paginator;
