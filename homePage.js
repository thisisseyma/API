import { recipePage } from "./recipePage.js";
export function homePage() {
  const mainContent = document.getElementById('main');
  mainContent.innerHTML = 
  `<div class="paragraph">
  <p class="welcomeParagraph">
    Can't decide what to eat? Limited ingredients at home? Craving a random choice? We're here to help! Let us be your food guide, making decision-making easy. Whether it's choosing, improvising with few ingredients, or seeking surprises, we've got you covered. Relax and enjoy a delicious dining experience with us!
  </p>
  </div>
  <div>
  <button id="recipeFinderBtn">Find Recipe</button>
  </div>`;
  const recipeButton = document.getElementById('recipeFinderBtn');
  recipeButton.addEventListener('click', () => {
      recipePage();
  });
  return mainContent;
}