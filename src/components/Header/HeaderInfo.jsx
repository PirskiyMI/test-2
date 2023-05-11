import React from 'react';
import { useResize } from './../../hooks/hooks';

import styles from './styles/HeaderInfo.module.scss';

import LOGO from './../../assets/img/header/header-logo.png';
import { HeaderList } from './HeaderList';

export const HeaderInfo = () => {
   const { isScreenSm } = useResize();

   return (
      <div className={styles.header_left}>
         {isScreenSm && (
            <div className={styles.header_logo}>
               <div className={styles.header_logo__img}>
                  <img src={LOGO} alt="Лого" />
               </div>
               <div className={styles.header_logo__description}>
                  крупный интегратор CRM в Росcии и ещё 8 странах
               </div>
            </div>
         )}
         <nav className={styles.header_nav}>
            <HeaderList/>
         </nav>
      </div>
   );
};
