function createReview(image,textImg,titleGames,genreGames,textReview){
  return `
  <div class="content-reviews">
    <img src="./imgs/${image}" alt="${textImg}">
    <div class="nome-jogo">
        <h2>${titleGames}</h2>
        <span>${genreGames}</span>
    </div>
    <p class="text-review">
        ${textReview}
    </p>
  </div>
  `
};