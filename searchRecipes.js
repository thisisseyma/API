import { displayResults } from "./displayResults.js";
export function searchRecipes(ingredientInput, resultsContainer) {
    const ingredients = ingredientInput.value.trim();

    if (ingredients) {
        resultsContainer.innerHTML = '<p>Loading...</p>';

        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=658d0e10e039497d9e54c2d9ef208638&ingredients=${ingredients}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data, resultsContainer);
        })
        .catch(error => {
            resultsContainer.innerHTML = '<p>Error occurred. Please try again later.</p>';
            console.log(error);
        });
    }
}