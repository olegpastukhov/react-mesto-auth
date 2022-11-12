import React from 'react';

function Login({ onLogin }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin({email, password});
  };


  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="form auth__form" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          autoComplete="email"
          value={email || ''}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          minLength="8"
          name="password"
          id="password"
          placeholder="Пароль"
          autoComplete="password"
          value={password || ''}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Войти</button>
        <span className="auth__login-hint"></span>
      </form>
    </div>
  );
};

export default Login;
