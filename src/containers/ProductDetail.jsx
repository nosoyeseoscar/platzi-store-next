import React from 'react';
import { ProductInfo } from '@components/ProductInfo';
import styles from '@styles/ProductDetail.scss';
import Image from 'next/image';

export const ProductDetail = () => {
  return (
    <aside className={styles.ProductDetail}>
      <div className={styles['ProductDetail-close']}>
        <Image src="./icons/icon_close.png" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};
