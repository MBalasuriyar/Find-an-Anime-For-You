var animeDisplay = document.querySelector('#anime');
var characterDisplay = document.querySelector('#character')
var quoteDisplay = document.querySelector('#quote');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
    var requestUrl = 'https://animechan.vercel.app/api/random';

    fetch(requestUrl)
        //      .then(response => response.json())
        .then(function(response) {
            return response.json();
        })

    .then(function(data) {
        console.log(data);
        animeDisplay.textContent = "Anime: " + data.anime;
        characterDisplay.textContent = "Character: " + data.character;
        quoteDisplay.textContent = "Quote: " + data.quote;

    })

}


fetchButton.addEventListener('click', getApi);