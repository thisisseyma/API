import { displayRecipe } from "./displayRecipe.js";
export function getRandomRecipe(resultsContainer) {
    resultsContainer.innerHTML = '<p>Loading...</p>';

    fetch('https://api.spoonacular.com/recipes/random?apiKey=658d0e10e039497d9e54c2d9ef208638')
        .then(response => response.json())
        .then(data => {
        const recipe = data.recipes[0];
        displayRecipe(recipe);
    })
        .catch(error => {
        resultsContainer.innerHTML = '<p>Error occurred. Please try again later.</p>';
        console.log(error);
    });
}