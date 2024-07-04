const checkAnswer = (choice) => {
  if (choice === currentPokemon.name) {
    resultContainer.textContent = "Correct!";
  } else {
    resultContainer.textContent = `Wrong! It's ${currentPokemon.name}.`;
  }
  pokemonImage.style.filter = "none"; // Show Pokemon
};

export const ShuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
