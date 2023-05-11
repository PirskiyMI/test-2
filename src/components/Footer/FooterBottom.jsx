import React from 'react';
import styles from './styles/FooterBottom.module.scss';

export const FooterBottom = () => {
   return (
      <div className={styles.footer_bottom}>
         <span className={styles.footer_marks}>©WELBEX 2022. Все права защищены.</span>
         <span className={styles.footer_pol}>Политика конфиденциальности</span>
      </div>
   );
};
