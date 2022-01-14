import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuBar.module.scss';

import closeImg from '../../resources/img/close.svg';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import menuImg from '../../resources/img/menu.svg';

const MenuBar = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: 350 }} role="presentation">
      <div className={styles.menu}>
        <div className={styles.close}>
          <img
            className={styles.close}
            onClick={toggleDrawer(anchor, false)}
            width={15}
            height={15}
            src={closeImg}
            alt="Close"
          />
        </div>
        <div className={styles.menuInfo}>
          <h2>Gevorg Karagozyan</h2>
          <span>Дата регистрации: 12 августа 2019 в 08:06</span>
        </div>
        <ul>
          <Link to="/">
            <li onClick={toggleDrawer(anchor, false)}>Главная</li>
          </Link>
          <Link to="/blog">
            <li onClick={toggleDrawer(anchor, false)}>Мои блоги</li>
          </Link>
          <Link to="/profile">
            <li onClick={toggleDrawer(anchor, false)}>Мой профиль</li>
          </Link>
          <Link to="/create_blog">
            <li onClick={toggleDrawer(anchor, false)}>Создать запись</li>
          </Link>
          <li>Выйти</li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div className={styles.menubar}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <img onClick={toggleDrawer(anchor, true)} width={37} height={37} src={menuImg} alt="account" />
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MenuBar;
