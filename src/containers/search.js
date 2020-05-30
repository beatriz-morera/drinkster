import React from 'react';
import { useRecoilValue } from 'recoil';

import { randomRecipeSelector, categoriesSelector } from '../state/selectors';

import Hero from '../components/hero';
import Categories from '../components/categories';
import Recipes from '../components/recipes';

import classes from './search.module.scss';

export default () => {
  const categories = useRecoilValue(categoriesSelector);
  const [randomRecipe] = useRecoilValue(randomRecipeSelector);

  return (
    <main className={classes.container}>
      <Hero featured={randomRecipe} />
      <Categories categories={categories} />
      <Recipes />
    </main>
  );
};
