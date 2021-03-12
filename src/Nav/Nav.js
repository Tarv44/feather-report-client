import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav(props) {
    const links = Boolean(props.username) 
        ? <div className={styles.links}>
            <NavLink to={'/dashboard'}>{props.username}</NavLink>
        </div>
        : <div className={styles.links}>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    return (
        <nav>
            <NavLink to={'/'} className={styles.logo}>Feather Report</NavLink>
            {links}
        </nav>
    )
}