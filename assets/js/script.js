var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
    var requestUrl = 'https://animechan.vercel.app/api/random';

    fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => console.log(quote))
}


fetchButton.addEventListener('click', getApi);