import React from 'react';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({email, password});
  };

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className="auth">
        <h2 className="auth__title">Регистрация</h2>
        <form className="form auth__form" onSubmit={handleSubmit}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            value={email || ""}
            onChange={handleEmailChange}
            required
          />
          <input
            id="password"
            name="password"
            type="password"
            minLength="8"
            placeholder="Пароль"
            autoComplete="password"
            value={password || ""}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
      <Link to="/sign-in" className="auth__login-hint">
        Уже зарегистрированы? Войти
      </Link>
    </>
  );
};

export default Register;
