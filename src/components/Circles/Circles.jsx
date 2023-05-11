import React from 'react';

import styles from './Circles.module.scss';
import { useResize } from '../../hooks/hooks';

export const Circles = () => {
   const { isScreenSm } = useResize();
   return (
      <>
         <div className={styles.circles_redLight}></div>
         <div className={styles.circles_purpleLight}></div>
         {!isScreenSm && <div className={styles.circles_yellowLight}></div>}
         <div className={styles.circles_purpleBall}></div>
         {isScreenSm && (
            <div className={`${styles.circles_redBall} ${styles.circles_redBall__b}`}></div>
         )}
         <div className={`${styles.circles_redBall} ${styles.circles_redBall__s}`}></div>
      </>
   );
};
