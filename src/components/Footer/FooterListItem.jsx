import React from 'react';

import styles from './styles/FooterListItem.module.scss';

export const FooterListItem = ({link}) => {
   return (
      <li className={styles.element_item}>
         <a href="#" className={styles.element_link}>
            {link}
         </a>
      </li>
   );
};
