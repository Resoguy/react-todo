import {Link} from 'react-router-dom';
import styles from './Toolbar.module.css';

const Toolbar = () => (
    <nav className={styles.navbar}>
        <Link className={styles.appLogo} to="/">
            Router App
        </Link>


        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <Link className={styles.navLink} to="/todos">
                    Todos
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} to="/users">
                    Users
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} to="/posts">
                    Posts
                </Link>
            </li>
        </ul>
    </nav>
)

export default Toolbar;