import React from "react";
const Fragment = React.Fragment;

const Layout = props => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Fragment>
);

export default Layout;
