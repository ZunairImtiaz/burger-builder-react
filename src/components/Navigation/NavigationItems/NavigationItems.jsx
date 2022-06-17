import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";



const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        {/* <li className={classes.NavigationItem}>
            <a href="/" active className={classes.active}>Burger Builder</a>
        </li>
        <li className={classes.NavigationItem}>
            <a href="/" className="">Checkout</a>
        </li> */}

        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;