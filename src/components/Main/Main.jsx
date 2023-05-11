import React from 'react';
import styles from './styles/Main.module.scss';
import { ContentBlock } from './ContentBlock';
import { TitleBlock } from './TitleBlock';
import { Circles } from '../Circles/Circles';
import { useResize } from '../../hooks/hooks';

export const Main = () => {
   const {isScreenSm} = useResize()
   return (
      <main className={styles.main}>
         <div className={`${styles.main_container}  _container`}>
            <TitleBlock />
            <ContentBlock />
         </div>
         {!isScreenSm && <Circles />}
      </main>
   );
};
