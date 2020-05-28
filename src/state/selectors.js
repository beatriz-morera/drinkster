import { selector } from 'recoil';
import { currentCategoryState } from './atom';

import { getCategories, getRecipesByCategory } from '../services/recipes';

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
