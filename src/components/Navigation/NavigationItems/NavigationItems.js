import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => {
  return (
    <div className={classes.NavigationItems}>
      <NavigationItem link='/' active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link='/'>Checkout</NavigationItem>
      <NavigationItem link='/'>About</NavigationItem>
    </div>
  );
};

export default navigationItems;
