import { displayRecipe } from "./displayRecipe.js";
export function getRecipeInformation(recipeId, resultsContainer) {
    fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=658d0e10e039497d9e54c2d9ef208638`)
      .then(response => response.json())
      .then(data => {
        displayRecipe(data);
    })
      .catch(error => {
        resultsContainer.innerHTML = '<p>Error occurred. Please try again later.</p>';
        console.log(error);
    });
}