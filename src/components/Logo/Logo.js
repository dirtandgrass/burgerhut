import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.css';

const Logo = props => (
  <div className={styles.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="Burger Hut" />
  </div>
);

export default Logo;
