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
        animeDisplay.textContent = data.anime
        characterDisplay.textContent = data.character
        quoteDisplay.textContent = data.quote

    })

}


fetchButton.addEventListener('click', getApi);