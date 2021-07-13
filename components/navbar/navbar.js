import { useRouter } from 'next/router';
import styles from './navbar.module.css';

const Navbar = () => {
    const router = useRouter();
    return (
        <div className={styles.NavMain}>
            <div className={styles.NavItemContainer}>
                <div className={styles.NavItem} onClick={() => router.push('/')}>home</div>
                <div className={styles.NavItem} onClick={() => router.push('/newsfeed/1')}>feed</div>
            </div>
        </div>
        
    )
}

export default Navbar
