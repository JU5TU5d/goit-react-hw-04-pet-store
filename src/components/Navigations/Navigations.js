/*eslint-disable*/
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigations.module.css';

const Navigations = () => (
  <ul className={styles.navigations}>
    <li>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.active}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/pets"
        className={styles.link}
        activeClassName={styles.active}
      >
        Pets
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={styles.link}
        activeClassName={styles.active}
      >
        About
      </NavLink>
    </li>
  </ul>
);

export default Navigations;
