import React from 'react';
import { useResize } from '../../hooks/hooks';

import styles from './styles/HeaderList.module.scss';

const HeaderListItem = ({ title }) => {
   return (
      <li className={styles.header_item}>
         <a href="#" className={styles.header_link}>
            {title}
         </a>
      </li>
   );
};

export const HeaderList = () => {
   const linksList = ['Услуги', 'Виджеты', 'Интеграции', 'Кейсы', 'Сертификаты'];
   const shortLinksList = ['Услуги', 'Виджеты', 'Интеграции', 'Кейсы'];

   const { isScreenSm } = useResize();

   return (
      <ul className={styles.header_list}>
         {isScreenSm
            ? linksList.map((el) => <HeaderListItem key={el} title={el} />)
            : shortLinksList.map((el) => <HeaderListItem key={el} title={el} />)}
      </ul>
   );
};
