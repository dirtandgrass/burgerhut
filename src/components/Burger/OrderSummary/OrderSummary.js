import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

//import styles from "./OrderSummary.css";
const Fragment = React.Fragment;

export default class extends Component {
  componentWillUpdate() {
    console.log('[OrderSummary] WillUpdate');
  }

  render() {
    const ingredientSummary = Object.entries(this.props.ingredients).map(i => {
      return (
        <li key={i[0]}>
          <span style={{ textTransform: 'capitalize' }}>{i[0]}</span>: {i[1]}
        </li>
      );
    });

    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>{this.props.price.toFixed(2)}$</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.cancel}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.order}>
          CONTINUE
        </Button>
      </Fragment>
    );
  }
}
