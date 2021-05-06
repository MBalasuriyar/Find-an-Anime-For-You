var animeDisplay = document.querySelector('#anime');
var characterDisplay = document.querySelector('#character')
var quoteDisplay = document.querySelector('#quote');
var fetchButton = document.getElementById('fetch-button');
var picBtn = document.getElementById('fetch-button-pic');

function getApi() {
    var requestUrl = 'https://animechan.vercel.app/api/random';

    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })

    .then(function(data) {
        console.log(data);
        animeDisplay.textContent = "Anime: " + data.anime;
        characterDisplay.textContent = "Character: " + data.character;
        quoteDisplay.textContent = "Quote: " + data.quote;
        var gifUrl = 'https://api.giphy.com/v1/gifs/search?api_key=yCzBacG75tZ5SWin4tVnxzMtl3uF3WIe&limit=1&tag=anime&q=' + data.character + " " + data.anime;
        fetch(gifUrl)
        .then(function(response) {
        return response.json();
        })
        
        // From Steve Griffith video, creating HTML elements to show the generated gif
        .then(function(content) {
        console.log(content.data);
        // Creating HTML elements to display generated gif
        var fig = document.createElement('figure');
        var img = document.createElement('img');
        var fc = document.createElement('figcaption');
        // Setting image source, alt text and caption
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        // Appending image and caption
        fig.appendChild(img);
        fig.appendChild(fc);
        var gifDiv = document.getElementById('gifDiv');
        // Setting container to replace previous gif with new one
        gifDiv.innerHTML = "";
        gifDiv.insertAdjacentElement('afterbegin', fig);
        })
    })
    
}

// Event listener for click fetch 
fetchButton.addEventListener('click', getApi);