import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const buildControls = (props) => {
  const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
  ];

  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong> €
      </p>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          clickAdd={() => props.clickAddIngredient(control.type)}
          clickRemove={() => props.clickRemoveIngredient(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.purchase}>
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
