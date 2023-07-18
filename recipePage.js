import { searchRecipes } from "./searchRecipes.js";
import { getRandomRecipe } from "./randomRecipe.js";
export function recipePage() {
    const mainContent = document.getElementById('main');
    mainContent.innerHTML = '<div class="container"><div class="search-container"><input type="text" id="ingredientInput" placeholder="Enter ingredients"><button id="searchButton">Search</button></div><div class="random-button"><button id="randomButton">Get Random Recipe</button></div></div><div id="resultsContainer"></div>';

    const ingredientInput = document.getElementById('ingredientInput');
    const searchButton = document.getElementById('searchButton');
    const randomButton = document.getElementById('randomButton');
    const resultsContainer = document.getElementById('resultsContainer');

    searchButton.addEventListener('click', () => {searchRecipes(ingredientInput, resultsContainer)});
    randomButton.addEventListener('click', () => {getRandomRecipe(resultsContainer)});
}