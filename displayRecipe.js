export function displayRecipe(recipe) {
    resultsContainer.innerHTML = `
        <h2 class="recipeTitle">${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}" class="displayImg">
        <p class="recipeSum">${recipe.summary}</p>
        <p class="servings">Preparation Time: ${recipe.readyInMinutes} minutes</p>
        <p class="servings">Servings: ${recipe.servings}</p>
        <h3 class="ingredients">Ingredients:</h3>
        <ul>
        ${recipe.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
        </ul>
        <h3 class="instructions">Instructions:</h3>
        <ol class="instructionsList">
        ${recipe.analyzedInstructions[0].steps.map(step => `<li>${step.step}</li>`).join('')}
        </ol>
    `;
}