import { selector } from 'recoil';
import { currentCategoryState } from './atom';

import { getRandomRecipe, getCategories, getRecipesByCategory } from '../services/recipes';

export const randomRecipeSelector = selector({
  key: 'randomRecipeSelector',
  get: () => getRandomRecipe().then((rs) => rs),
});

export const categoriesSelector = selector({
  key: 'categoriesSelector',
  get: () => getCategories().then((rs) => rs),
});

export const currentCategoryRecipesSelector = selector({
  key: 'currentCategoryRecipesSelector',
  get: ({ get }) => {
    const categoryName = get(currentCategoryState);
    if (!categoryName) {
      return [];
    }
    return getRecipesByCategory(categoryName);
  },
});
