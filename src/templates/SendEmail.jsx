import React from 'react';
import '../styles/SendEmail.scss';
import Image from 'next/image';
import Link from 'next/link';

export const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <Image src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="email-image">
          <Image src="./icons/email.svg" alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Recibiste el email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
};
