import React from 'react';
import styles from './styles/ContentItem.module.scss';

import LINE from './../../assets/img/main/Line 9.svg';

export const ContentItem = ({ title, text }) => {
   return (
      <div className={`${styles.main_item} ${styles.item}`}>
         <h3 className={styles.item_title}>{title}</h3>
         <p className={styles.item_text}>{text}</p>
      </div>
   );
};

export const ContentMinItem = ({ title }) => {
   return (
      <div className={`${styles.main_item} ${styles.item}`}>
         <div className={styles.item_title}>
            {/* <div className={styles.item_line}>
               <img src={LINE} alt="Линия" />
            </div>{' '} */}
            <span className='_decor'>— </span>
            {title}
         </div>
      </div>
   );
};
