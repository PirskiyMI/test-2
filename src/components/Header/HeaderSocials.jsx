import React from 'react';

import styles from './styles/HeaderSocials.module.scss';

import { SocialList } from '../../consts';
import { SocialLink } from '../SocialLink/SocialLink';

export const HeaderSocials = () => {
   return (
      <div className={styles.header_socials}>
         {SocialList.map((el, index) => (
            <SocialLink key={index} styles={el} />
         ))}
      </div>
   );
};
