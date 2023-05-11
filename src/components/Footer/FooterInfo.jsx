import React from 'react';

import styles from './styles/FooterInfo.module.scss';
import { FooterColumn } from './FooterColumn';

export const FooterInfo = () => {
   const footerElements = [
      { id: 1, title: 'О компании', links: ['Партнёрская программа', 'Вакансии'] },
      {
         id: 2,
         title: 'Меню',
         links: [
            ['Расчёт стоимости', 'Услуги', 'Виджеты', 'Интеграции', 'Наши клиенты'],
            [
               'Кейсы',
               'Благодарственные письма',
               'Сертификаты',
               'Блог на Youtube',
               'Вопрос / Ответ',
            ],
         ],
      },
   ];

   return (
      <div className={styles.footer_info}>
         {footerElements.map((el) => (
            <FooterColumn key={el.id} title={el.title} links={el.links} />
         ))}
      </div>
   );
};
