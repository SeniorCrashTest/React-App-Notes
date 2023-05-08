import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <button className="header__button">+</button>
      </div>
      <div className="header__right">
        <button className="header__icon">-</button>
        <button className="header__icon" style={{ backgroundColor: 'red' }}>x</button>
      </div>
    </header>
  );
}

export default Header;
