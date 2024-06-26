import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';
import SideNav from './components/SideNav';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <SideNav />
        <div className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
