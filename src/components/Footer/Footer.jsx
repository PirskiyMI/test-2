import React from 'react';
import styles from './styles/Footer.module.scss';


const ListItem = ({ link }) => {
   return (
      <li className={styles.element_item}>
         <a href="#" className={styles.element_link}>
            {link}
         </a>
      </li>
   );
};

const List = ({ links }) => {
   return (
      <ul className={styles.footer_list}>
         {links.map((el) => (
            <ListItem key={el} link={el} />
         ))}
      </ul>
   );
};

const FooterColumn = ({ title, links }) => {
   return (
      <div className={styles.footer_element}>
         <div className={styles.footer_title}>{title}</div>
         <nav className={styles.footer_nav}>
            {Array.isArray(links[0]) ? (
               links.map((newEl, index) => <List key={index} links={newEl} />)
            ) : (
               <List links={links} />
            )}
         </nav>
      </div>
   );
};

export const Footer = () => {
   

   return (
      <footer className={styles.footer}>
         {/* <div className={`${styles.footer_container} _container`}>
            <div className={styles.footer_top}>
               <div className={styles.footer_info}>
                  {footerElements.map((el) => (
                     <FooterColumn key={el.id} title={el.title} links={el.links} />
                  ))}
               </div>
               <div className={styles.footer_contacts}>
                  <div className={styles.footer_title}>Контакты</div>
                  <div className={styles.footer_tel}>
                     <a href="tel:+75555555555">+7 555 555-55-55</a>
                  </div>
                  <div className={styles.footer_socials}>
                     {SocialList.map((el, index) => (
                        <SocialLink key={index} styles={el} />
                     ))}
                  </div>
                  <div className={styles.footer_address}>Москва, Путевой проезд 3с1, к 902</div>
               </div>
            </div>
            <div className={styles.footer_bottom}>
               <span className={styles.footer_watms}>©WELBEX 2022. Все права защищены.</span>
               <span className={styles.footer_pol}>Политика конфиденциальности</span>
            </div>
         </div> */}
      </footer>
   );
};
