const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export async function getRandomRecipe() {
  const data = await fetch(`${BASE_URL}/random.php`).then((rs) => rs.json());
  return data.drinks;
}

export async function getCategories() {
  const data = await fetch(`${BASE_URL}/list.php?c=list`).then((rs) => rs.json());
  return data.drinks;
}

export async function getIngredients() {
  const data = await fetch(`${BASE_URL}/list.php?i=list`).then((rs) => rs.json());
  return data.drinks;
}

export async function getRecipesByCategory(category) {
  const data = await fetch(`${BASE_URL}/filter.php?c=${category}`).then((rs) => rs.json());
  return data.drinks;
}

export async function getRecipes(ingredient, category) {
  const data = await fetch(`${BASE_URL}/filter.php?i=${ingredient}&c=${category}`).then((rs) =>
    rs.json()
  );
  return data.drinks;
}

export async function getRecipeById(id) {
  const data = await fetch(`${BASE_URL}/lookup.php?i=${id}`).then((rs) => rs.json());
  return data.drinks;
}
