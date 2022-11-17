import React from 'react';
import ProductItem from '@components/ProductItem';
import { useGetProducts } from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

export const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
};
