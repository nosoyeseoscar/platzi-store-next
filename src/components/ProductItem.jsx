import React, { useContext } from 'react';
import '@styles/ProductItem.module.scss';
//import icon from '@icons/bt_add_to_cart.svg';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import { AppContext } from '@context/AppContext';
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    console.log('in cart: ', state.cart.includes(item));
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={product.images[0]} width={240} height={240} alt={product.title} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={styles['more-clickable-area']} onClick={() => handleClick(product)} aria-hidden="true" >
          {state.cart.includes(product) ? (
            <Image className={(styles.disabled, styles['add-to-cart-btn'])} src={addedToCartImage} alt="added to cart" />
          ) : (
            <Image className={(styles['add-to-cart-btn'], styles.pointer)} src={addToCartImage} alt="add to cart" />
          )}
        </figure>
      </div>
    </div>
  );

  /* return (
    <div className={styles.ProductItem}>
      <Image loader={() => product.images[0]} width="100%" height="100%" layout="responsive" src={product.images[0]} alt={product.title} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image loader={() => product.images[0]} width="100%" height="100%" layout="responsive" src={addToCartImage} alt="addToCartImage" />
        </figure>
      </div>
    </div>
  ); */
  /* return (
    <div className={styles.ProductItem}>
      <img src={product.images[0]} alt={product.title} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={styles['more-clickable-area']} onClick={() => handleClick(product)}>
          {state.cart.includes(product) ? (
            <img className={styles['disabled add-to-cart-btn']} src={addedToCartImage} alt="added to cart" />
          ) : (
            <img className={styles['add-to-cart-btn pointer']} src={addToCartImage} alt="add to cart" />
          )}
        </figure>
      </div>
    </div>
  ); */
};

export default ProductItem;
