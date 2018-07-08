import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './SideDrawer.css';

const Fragment = React.Fragment;

export default props => {
  let attachedClasses = [styles.SideDrawer, styles.Close];

  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }

  return (
    <Fragment>
      <Backdrop clicked={props.closed} show={props.open} />
      <div className={attachedClasses.join(' ')}>
        <div className={styles.closeIcon} onClick={props.closed}>
          X
        </div>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};
