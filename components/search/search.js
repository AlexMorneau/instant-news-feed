import styles from './search.module.css';

const Search = ({ ...otherProps }) => {
    return (
        <div className={styles.SearchContainer}>
            <input
                className={styles.SearchBar}
                placeholder="Search Keyword"
                { ...otherProps } />
        </div>
    )
}

export default Search;
