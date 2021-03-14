import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import logo from '../img/F.png';

export default function Nav(props) {
    const links = Boolean(props.current.name) 
        ? <div className={styles.links}>
            <NavLink to={`/co/${props.current.path}/admin`}>Account</NavLink>
        </div>
        : <div className={styles.links}>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    return (
        <nav>
            <NavLink to={'/'} className={styles.logo}>
                <img src={logo} alt='logo'/>
            </NavLink>
            {links}
        </nav>
    )
}