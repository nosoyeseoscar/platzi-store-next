import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
//Assets
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
//components
import { Menu } from '@components/Menu';
//Context
import { AppContext } from '@context/AppContext';
//Containers
import { MyOrder } from '@containers/MyOrder';
import styles from '@styles/Header.module.scss';

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={styles.Nav}>
      <div className={styles.menu}>
        <Image src={menu} alt="menu"  />
      </div>
      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle} aria-hidden="true" >
            platzi@example.com
          </li>
          <li
            className={styles['navbar-shopping-cart']}
            onClick={() => {
              setToggleOrders(!toggleOrders);
            }
          } aria-hidden="true" 
          >
            <Image src={shoppingCart} alt="shopping cart" />

            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};
