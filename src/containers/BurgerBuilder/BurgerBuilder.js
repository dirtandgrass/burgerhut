import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const Fragment = React.Fragment;

const INGREDIENT_PRICES = {
  salad: 0.05,
  bacon: 0.75,
  cheese: 0.5,
  meat: 1.25,
};
class BurgerBuilder extends Component {
  // constructor (props) {
  //     super(props);
  //     this.state = {...};
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 3,
    purchaseable: false,
    purchasing: false,
  };

  updatePurchaseState = ingredients => {
    for (let key in ingredients) {
      if (ingredients[key] > 0) {
        this.setState({ purchaseable: true });
        return;
      }
    }
    this.setState({ purchaseable: false });
  };

  purchaseHandler = () => {
    if (!this.state.purchasing) this.setState({ purchasing: true });
  };

  hidePurchaseHandler = () => {
    if (this.state.purchasing) this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("You Continue!");
  };

  addIngredientHandler = type => {
    // copy state
    const nIngredients = {
      ...this.state.ingredients,
    };
    nIngredients[type] = this.state.ingredients[type] + 1;

    this.setState({
      totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type],
      ingredients: nIngredients,
    });
    this.updatePurchaseState(nIngredients);
  };

  removeIngredientHandler = type => {
    // copy state
    const nIngredients = {
      ...this.state.ingredients,
    };

    if (this.state.ingredients[type] > 0) {
      nIngredients[type] = this.state.ingredients[type] - 1;
      this.setState({
        totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type],
        ingredients: nIngredients,
      });
      this.updatePurchaseState(nIngredients);
    }
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Fragment>
        <Modal show={this.state.purchasing} clicked={this.hidePurchaseHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.hidePurchaseHandler}
            order={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          removeDisabled={disabledInfo}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
