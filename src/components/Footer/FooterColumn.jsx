import React from 'react';
import { FooterList } from './FooterList';

import styles from './styles/FooterColumn.module.scss';

export const FooterColumn = ({ title, links }) => {
   return (
      <div className={styles.footer_element}>
         <div className={styles.footer_title}>{title}</div>
         <nav className={styles.footer_nav}>
            {Array.isArray(links[0]) ? (
               links.map((newEl, index) => <FooterList key={index} links={newEl} />)
            ) : (
               <FooterList links={links} />
            )}
         </nav>
      </div>
   );
};
