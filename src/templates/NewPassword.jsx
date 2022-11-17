import React from 'react';
import styles from '@styles/NewPassword.scss';
import Image from 'next/image';

export const NewPassword = () => {
  return (
    <div className={styles.NewPassword}>
      <div className={styles['NewPassword-container']}>
        <Image src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new passwrd for yue account</p>
        <form action="/" className="form">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" id="password" placeholder="*********" className="input input-password" />
          <label htmlFor="new-password" className="label">
            Password
          </label>
          <input type="password" id="new-password" placeholder="*********" className="input input-password" />
          <input type="submit" value="Confirm" className="primary-button login-button" />
        </form>
      </div>
    </div>
  );
};
