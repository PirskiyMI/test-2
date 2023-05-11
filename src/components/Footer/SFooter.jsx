import React from 'react';
import { FooterTop } from './FooterTop';
import { FooterBottom } from './FooterBottom';

import styles from './styles/Footer.module.scss';

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={`${styles.footer_container} _container`}>
            <FooterTop />
            <FooterBottom />
         </div>
      </footer>
   );
};
