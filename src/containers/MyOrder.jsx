import React, { useContext } from 'react';
import Link from 'next/link';
import { OrderItem } from '@components/OrderItem';
import flechita from '@icons/flechita.svg';
import { AppContext } from '@context/AppContext';
import Image from 'next/image';

import styles from '@styles/MyOrder.module.scss';

export const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => {
      return accumulator + currentValue.price;
    };
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['MyOrder-container']}>
        <div className={styles['title-container']}>
          {/* <Image className={(styles['more-clickable-area'], styles.pointer)} src={flechita} alt="arrow" onClick={() => toggleOrder()} /> */}
          <Image className={(styles['more-clickable-area'], styles.pointer)} src={flechita} alt="arrow" />
          <p className={styles.title}>My order</p>
        </div>
        <div className={styles['my-order-content']}>
          <div className={styles['my-orders']}>
            {state.cart.map((product) => (
              <OrderItem product={product} key={`orderItem-${product.id}`} />
            ))}
          </div>
          <div className={styles.order}>
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <Link className={styles['primary-button']} href="/checkout">
            Checkout
          </Link>
        </div>
      </div>
    </aside>
  );
};
