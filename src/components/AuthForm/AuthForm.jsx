import React from 'react';

import styles from './AuthForm.module.scss';

import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';

const AuthForm = () => {
  return (
    <div>
      <LoginForm />
      <RegistrationForm />
    </div>
  );
};

export default AuthForm;
