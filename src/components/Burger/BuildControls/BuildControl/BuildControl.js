import React from "react";

import styles from "./BuildControl.css";
//import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const BuildControl = props => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button
      className={styles.Less}
      disabled={props.removeDisabled}
      onClick={props.removed}
    >
      Less
    </button>
    <button className={styles.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default BuildControl;
