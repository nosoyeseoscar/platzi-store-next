import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';
import close from '@icons/icon_close.png';

export const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };
  /* return (
    <div className={styles.OrderItem}>
      <figure>
        <img src={product?.images[0]} alt={product?.title} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <img
        src={icon}
        alt="close"
        onClick={() => {
          handleRemove(product);
        }}
      />
    </div>
  ); */

  return (
    <div className={styles.OrderItem}>
      <figure>
      <Image src={product?.images[0]} width={70} height={70} alt={product?.title} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <div className={`${styles.pointer} ${styles['more-clickable-area']}`}>
      <Image className={`${styles.pointer} ${styles['more-clickable-area']}`} src={close} alt="close" onClick={() => handleRemove(product)} />
      </div>
    </div>
  );
};
