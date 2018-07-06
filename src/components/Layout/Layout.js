import React from "react";
import styles from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Fragment = React.Fragment;

const Layout = props => (
  <Fragment>
    <Toolbar />
    <main className={styles.Content}>{props.children}</main>
  </Fragment>
);

export default Layout;
