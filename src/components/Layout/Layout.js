import React from "react";
import styles from "./Layout.css";

const Fragment = React.Fragment;

const Layout = props => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.Content}>{props.children}</main>
  </Fragment>
);

export default Layout;
