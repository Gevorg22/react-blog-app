import React from 'react';

import styles from './Header.module.scss';

import MenuBar from '../MenuBar/MenuBar';

import searchImg from '../../resources/img/search.svg';
import accountImg from '../../resources/img/account.svg';

const Header = () => {
  return (
    <div>
      <div className={styles.headerMenu}>
        <h2>Мой блог</h2>

        <div className={styles.searchPanel}>
          <img className={styles.close} width={20} height={20} src={searchImg} alt="Search" />
          <input id="search" placeholder="Поиск статьи по заголовку или тексту..." autoComplete="off" />
        </div>
        <div className={styles.account}>
          <img width={21} height={21} src={accountImg} alt="account" />
        </div>
        <MenuBar />
      </div>
    </div>
  );
};

export default Header;
