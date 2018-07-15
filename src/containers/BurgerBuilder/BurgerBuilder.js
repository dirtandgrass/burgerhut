import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../transport/orders';

const Fragment = React.Fragment;

const INGREDIENT_PRICES = {
  salad: 0.05,
  bacon: 0.75,
  cheese: 0.5,
  meat: 1.25
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
      meat: 0
    },
    totalPrice: 3,
    purchaseable: false,
    purchasing: false,
    loading: false
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

  purchaseContinueHandler = async () => {
    // alert("You Continue!");
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        id: 1,
        name: 'Luke',
        address: {
          street: 'York St.',
          postalCode: 'A1B 2C3',
          country: 'Canada'
        },
        email: 'testme@me.com'
      },
      deliveryMethod: 'fastest'
    };
    try {
      const res = await axios.post('/orders.json', order);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  addIngredientHandler = type => {
    // copy state
    const nIngredients = {
      ...this.state.ingredients
    };
    nIngredients[type] = this.state.ingredients[type] + 1;

    this.setState({
      totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type],
      ingredients: nIngredients
    });
    this.updatePurchaseState(nIngredients);
  };

  removeIngredientHandler = type => {
    // copy state
    const nIngredients = {
      ...this.state.ingredients
    };

    if (this.state.ingredients[type] > 0) {
      nIngredients[type] = this.state.ingredients[type] - 1;
      this.setState({
        totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type],
        ingredients: nIngredients
      });
      this.updatePurchaseState(nIngredients);
    }
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    if (this.state.loading) {
    }
    return (
      <Fragment>
        <Modal show={this.state.purchasing} clicked={this.hidePurchaseHandler}>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={this.state.ingredients}
              cancel={this.hidePurchaseHandler}
              order={this.purchaseContinueHandler}
              price={this.state.totalPrice}
            />
          )}
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
