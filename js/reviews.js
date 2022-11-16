var contador = document.querySelector('.badge');

document.querySelector('button').addEventListener('click', function(){
var numero = parseInt(contador.textContent) + 1;
contador.textContent = numero;
});


function createReview(image,textImg,titleGames,genreGames,textReview){
  return `
  <div class="content-reviews">
    <div class="nota">5</div>
    <img src="./imgs/${image}" alt="${textImg}">
    <div class="nome-jogo">
        <h2>${titleGames}</h2>
        <span>${genreGames}</span>
    </div>
    <p class="text-review">
        ${textReview}
    </p>
    <button class="btn btn-primary" type="button">
        Review <span class="badge"> </span>
    </button>
  </div>
  `
};