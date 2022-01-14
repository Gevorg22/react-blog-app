import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';

import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import HomePage from '../../pages/HomePage/HomePage';
import BlogPage from '../../pages/BlogPage/BlogPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import CreateBlogPage from '../../pages/CreateBlogPage/CreateBlogPage';
import AuthForm from '../AuthForm/AuthForm';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      {/* <AuthForm /> */}

      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/create_blog" element={<CreateBlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
