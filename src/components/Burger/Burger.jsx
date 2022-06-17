import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
    let requiredIngredients = Object.keys(props.ingredients).map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_,index) => {
            return <BurgerIngredient key={ingredient + index} type={ingredient} />
        })
    }).reduce((initial, current) => initial.concat(current),[]);
    if (requiredIngredients.length === 0) {
        requiredIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {requiredIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;