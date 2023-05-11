import React from 'react';
import { FooterListItem } from './FooterListItem';

import styles from './styles/FooterList.module.scss';

export const FooterList = ({links}) => {
   return (
      <ul className={styles.footer_list}>
         {links.map((el) => (
            <FooterListItem key={el} link={el} />
         ))}
      </ul>
   );
};
