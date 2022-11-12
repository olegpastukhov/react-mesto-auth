import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logoPath from '../images/logo-header.svg';

function Header({ loggedIn, userEmail, onSignOut }) {

  const location = useLocation();

  return (
    <header className="header page__header">
      <img className="header__logo" src={logoPath} alt="Логотип Mesto" />
      {location.pathname === '/sign-in' && (
        <Link to="/sign-up" className="header__link">
          Зарегистрироваться
        </Link>
      )}
      {location.pathname === '/sign-up' && (
        <Link to="/sign-in" className="header__link">
          Войти
        </Link>
      )}
      {loggedIn && (
        <nav className="header__nav">
          <span>{userEmail}</span>
          <button className="header__sign-out" onClick={() => onSignOut()}>
            Выйти
          </button>
        </nav>
      )}
    </header>
  )
}

export default Header;
