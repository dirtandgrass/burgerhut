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
    <p>
      Price: <strong>{props.price.toFixed(2)}$</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.type}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        removeDisabled={props.removeDisabled[ctrl.type]}
      />
    ))}
    <button
      className={styles.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
