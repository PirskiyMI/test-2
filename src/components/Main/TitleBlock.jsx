import React from 'react';
import styles from './styles/TitleBlock.module.scss'

export const TitleBlock = () => {
   return (
      <div className={styles.main_title}>
         <div className={styles.main_top}>
            <div className={styles.main_label}>Зарабатывайте больше</div>
            <h1 className={`${styles.main_logo} ${styles.main_decor} _decor`}>c WELBEX</h1>
         </div>
         <p className={styles.main_subtitle}>Развиваем и контролируем продажи за вас</p>
      </div>
   );
};
