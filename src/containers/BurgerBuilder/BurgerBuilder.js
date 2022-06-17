import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Model from "../../components/UI/Model/Model";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICE = { salad: 10, bacon: 30, cheese: 20, meat: 70};
class BurgerBuilder extends Component {
    state = {
        ingredients: { salad: 1, bacon: 1, cheese: 1, meat: 1 },
        totalPrice: 160,
        purchasable: true,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.values(ingredients).reduce((sum,current) => sum + current, 0);
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = type => {
        const ingredients = { ...this.state.ingredients };
        ingredients[type] = this.state.ingredients[type] + 1;
        const totalPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        this.setState({ingredients, totalPrice});
        this.updatePurchaseState(ingredients);
    }

    removeIngredientHandler = type => {
        if (this.state.ingredients[type] <= 0) {
            return;
        }
        const ingredients = { ...this.state.ingredients };
        ingredients[type] = this.state.ingredients[type] - 1;
        const totalPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
        this.setState({ingredients, totalPrice});
        this.updatePurchaseState(ingredients);
    }

    purchaseHandler = () => this.setState({ purchasing: true });
    purchaseCancelHandler = () => this.setState({ purchasing: false });
    purchaseContinueHandler = () => alert('Continue Purchase');

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;
        }

        return(
            <Aux>
                <Model show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}  />
                </Model>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;