import React from "react";
import styles from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
];

const BuildControls = props => (
  <div className={styles.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl key={ctrl.type} label={ctrl.label} type={ctrl.type} />
    ))}
  </div>
);

export default BuildControls;
