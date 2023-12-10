import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Citiess</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
        <li>
          <NavLink to="form">Form</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
