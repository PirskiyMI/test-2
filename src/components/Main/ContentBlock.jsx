import React from 'react';

import styles from './styles/ContentBlock.module.scss';

import { useResize } from '../../hooks/hooks';
import { ContentItem, ContentMinItem } from './ContentItem';



export const ContentBlock = () => {
   const { isScreenSm, isScreenMd } = useResize();
   const ItemsElements = [
      { id: 1, title: 'Виджеты', text: '30 готовых решений' },
      { id: 2, title: 'Dashboard', text: 'с показателями вашего бизнеса' },
      { id: 3, title: 'Skype Аудит', text: 'отдела продажи CRM системы' },
      { id: 4, title: '35 дней', text: 'использования CRM' },
   ];
   const MobileItemsElements = [
      { id: 1, title: 'Skype аудит'},
      { id: 2, title: '30 виджетов'},
      { id: 3, title: 'Dashboard'},
      { id: 4, title: 'Месяц аmoCRM'},
   ];

   return (
      <div className={styles.main_content}>
         <div className={styles.main_body}>
            <h2 className={styles.main_prefs}>
               Вместе c{' '}
               <span className={`${styles.main_decor} _decor`}>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы
               дарим:
            </h2>
            <div className={styles.main_items}>
               {isScreenMd
                  ? ItemsElements.map((el) => (
                       <ContentItem key={el.id} title={el.title} text={el.text} />
                    ))
                  : MobileItemsElements.map((el) => <ContentMinItem key={el.id} title={el.title} />)}
            </div>
         </div>
         {isScreenSm && <button className={styles.main_button}>Получить консультацию</button>}
      </div>
   );
};
