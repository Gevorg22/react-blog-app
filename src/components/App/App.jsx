import React from 'react';

import styles from './App.module.scss';

import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import HomePage from '../../Pages/HomePage/HomePage';
import BlogPage from '../../Pages/BlogPage/BlogPage';
import ProfilePage from '../../Pages/ProfilePage/ProfilePage';

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <HomePage />
        <BlogPage />
        <ProfilePage />
      </div>
      <MenuBar />
    </div>
  );
};

export default App;
