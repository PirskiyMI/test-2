import React from 'react';
import { FooterInfo } from './FooterInfo';
import { FooterContacts } from './FooterContacts';

import styles from './styles/FooterTop.module.scss';

export const FooterTop = () => {
   return (
      <div className={styles.footer_top}>
         <FooterInfo />
         <FooterContacts />
      </div>
   );
};
