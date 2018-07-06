import React from "react";

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
      <p>Continue to checkout?</p>
    </Fragment>
  );
};

export default OrderSummary;
