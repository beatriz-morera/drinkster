import React from 'react';
import { useRecoilValue } from 'recoil';
import { currentCategoryRecipesSelector } from '../state/selectors';

import classes from './recipes.module.css';

export default () => {
  const recipes = useRecoilValue(currentCategoryRecipesSelector);

  return (
    <ul className={classes.gridList}>
      {recipes &&
        recipes.map((r) => (
          <li key={r.idDrink} cols={r.featured ? 2 : 1} rows={r.featured ? 2 : 1}>
            <img src={r.strDrinkThumb} alt={r.strDrink} />
          </li>
        ))}
    </ul>
  );
};
