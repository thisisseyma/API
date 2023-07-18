import { getRecipeInformation } from "./recipeInfo.js";
export function displayResults(recipes, resultsContainer) {
    if (recipes.length > 0) {
    const ul = document.createElement('ul');
    ul.classList.add('resultBoxes');

    recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.classList.add('resultBox');
        const link = document.createElement('a');
        link.classList.add('resultLink');
        link.href = '#';
        link.addEventListener('click', () => {
        getRecipeInformation(recipe.id, resultsContainer);
        });

        const image = document.createElement('img');
        image.src = recipe.image;
        image.alt = recipe.title;

        const title = document.createElement('h3');
        title.textContent = recipe.title;

        link.appendChild(image);
        link.appendChild(title);
        li.appendChild(link);
        ul.appendChild(li);
    });

    resultsContainer.innerHTML = '';
    resultsContainer.appendChild(ul);
    } else {
    resultsContainer.innerHTML = '<p>No recipes found.</p>';
    }
}
