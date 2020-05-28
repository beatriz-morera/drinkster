import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { categoriesSelector } from '../state/selectors';
import { currentCategoryState } from '../state/atom';

import Recipes from '../components/recipes';

import classes from './search.module.css';

export default () => {
  const setCurrentCategory = useSetRecoilState(currentCategoryState);
  const categories = useRecoilValue(categoriesSelector);

  return (
    <main className={classes.container}>
      <h1>Choose a Category</h1>
      <ul>
        {categories &&
          categories.map((c) => (
            <li key={c.strCategory} onClick={() => setCurrentCategory(c.strCategory)}>
              {c.strCategory}
            </li>
          ))}
      </ul>
      <Recipes />
    </main>
  );
};
