import React from 'react';

import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileInfo}>
        <h1>Gevorg Karagozyan</h1>
        <span>
          Дата регистрации: <b>12 августа 2019 в 08:06</b>
        </span>
      </div>
      <div className={styles.blogs}>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.active}`}>Статьи</button>
          <button className={`${styles.button}`}>Комментарии</button>
        </div>
        Блоги
      </div>
    </div>
  );
};

export default ProfilePage;
