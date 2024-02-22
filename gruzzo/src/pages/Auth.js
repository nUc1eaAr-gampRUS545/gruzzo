// Auth.jsx
import React, { useEffect } from 'react';

const Auth = () => {
  useEffect(() => {
    console.log('Auth component rendered'); // Проверка, доходит ли управление до компонента
  }, []);

  return (
    <div>
      <h1>Login Page</h1>
      {/* Ваше содержимое страницы входа */}
    </div>
  );
};

export default Auth;
