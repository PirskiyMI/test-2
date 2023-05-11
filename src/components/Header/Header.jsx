import React, { useState } from 'react';
import './styles/fonts/iconsfont.css';
import styles from './styles/Header.module.scss';

import { useResize } from '../../hooks/hooks';
import { HeaderContacts } from './HeaderContacts';
import { HeaderInfo } from './HeaderInfo';

export const Header = () => {
   const { isScreenMdb } = useResize();

   return (
      <header className={styles.header}>
         <div className={`${styles.header_container} _container`}>
            <HeaderInfo />
            {isScreenMdb && <HeaderContacts />}
         </div>
      </header>
   );
};
