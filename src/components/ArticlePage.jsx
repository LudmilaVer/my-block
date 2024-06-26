import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ArticlePage.module.css';

function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/articles');
  };

  return (
    <div className={styles.container} data-aos="zoom-in">
      <h2 className={styles.heading}>Статья {id}</h2>
      <p className={styles.content}>Содержание статьи {id}</p>
      <button className={styles.backButton} onClick={handleBack}>Назад</button>
    </div>
  );
}

export default ArticlePage;
