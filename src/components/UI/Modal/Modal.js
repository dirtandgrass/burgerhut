import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.css";

const Fragment = React.Fragment;

const Modal = props => (
  <Fragment>
    <Backdrop show={props.show} clicked={props.clicked} />
    <div
      className={styles.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Fragment>
);

export default Modal;
