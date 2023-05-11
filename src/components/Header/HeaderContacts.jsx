import React from 'react';
import styles from './styles/HeaderContacts.module.scss';

import { HeaderSocials } from './HeaderSocials';

export const HeaderContacts = () => {
   return (
      <div className={styles.header_right}>
         <div className={styles.header_contacts}>
            <div className={styles.header_tel}>
               <a href="tel:+75555555555">+7 555 555-55-55</a>
            </div>
            <HeaderSocials/>
         </div>
      </div>
   );
};
