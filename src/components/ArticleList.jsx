import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticleList.module.css';

function ArticleList() {
  return (
    <div className={styles.container} data-aos="fade-right">
      <h2 className={styles.heading}>Список статей</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}><Link to="/article/1" className={styles.link}>Статья 1</Link></li>
        <li className={styles.listItem}><Link to="/article/2" className={styles.link}>Статья 2</Link></li>
        <li className={styles.listItem}><Link to="/article/3" className={styles.link}>Статья 3</Link></li>
      </ul>
    </div>
  );
}

export default ArticleList;