import React from 'react';
import logo from './../../assets/icons/logo.svg';
import HeaderCounter from './HeaderCounter/HeaderCounter';
import cl from './Header.module.css';
import { Link } from 'react-router-dom';

function Header({ count }: { count: number }) {
  return (
    <header id={cl.header}>
      <Link to='/' style={{ textDecoration: 'none', color: '#333333' }}>
        <div className={cl.logo}>
          <img src={logo} alt='' className={cl.logo__img} />
          <h1 className={cl.logo__name}>FLOWERS SHOP</h1>
        </div>
      </Link>

      <Link to='/basketPage' style={{ textDecoration: 'none', color: '#333333' }}>
        <HeaderCounter count={count} />
      </Link>
    </header>
  );
}

export default Header;
