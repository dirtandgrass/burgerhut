import React from "react";
import Button from "../../UI/Button/Button";

//import styles from "./OrderSummary.css";
const Fragment = React.Fragment;
const OrderSummary = props => {
  const ingredientSummary = Object.entries(props.ingredients).map(i => {
    return (
      <li key={i[0]}>
        <span style={{ textTransform: "capitalize" }}>{i[0]}</span>: {i[1]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>{props.price.toFixed(2)}$</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.cancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.order}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
