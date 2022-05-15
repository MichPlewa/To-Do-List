import styles from './NavBar.module.scss';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.nav_wrapper}>
        <Link className="fa fa-tasks" to="/" />
        <ul className={styles.nav_list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to="/favorite"
            >
              Favorite
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
