import React from 'react';
import { SocialList } from '../../consts';
import { SocialLink } from '../SocialLink/SocialLink';

import styles from './styles/FooterContacts.module.scss';

export const FooterContacts = () => {
   return (
      <div className={styles.footer_contacts}>
         <div className={styles.footer_title}>Контакты</div>
         <div className={styles.footer_tel}>
            <a href="tel:+75555555555">+7 555 555-55-55</a>
         </div>
         <div className={styles.footer_socials}>
            {SocialList.map((el, index) => (
               <SocialLink key={index} styles={el} />
            ))}
         </div>
         <div className={styles.footer_address}>Москва, Путевой проезд 3с1, к 902</div>
      </div>
   );
};
