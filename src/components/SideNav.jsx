import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SideNav.module.css';

function SideNav() {
  return (
    <div className={styles.sideNav}>
      <h3>Навигация</h3>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/articles">Статьи</Link></li>
      </ul>
    </div>
  );
}

export default SideNav;