// main.js //

const searchForm = document.querySelector('.js-search-form');
const searchInput = document.querySelector('.js-search-input');
const resultsEl = document.querySelector('.js-results');
const searchNum = document.querySelector('.js-search-num');

function lettersAndNumbersOnly(input) {
    var regex = /[^a-z,0-9,-, ]/gi;
    input.value = input.value.replace(regex, "");
}

function numbersOnly(input) {
    var regex = /[^0-9]/g;
    input.value = input.value.replace(regex, "");
}

searchForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const q = searchInput.value;
    const limit = searchNum.value;
    search(q, limit);
});

function search(q, limit) {
    const apiKey = "4pXNXgB40a4SilkpPfI2ZlLu1qR6utmm";
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${limit}`;

    function errorHandling() {
        resultsEl.innerHTML = `<h3 class="error">Error loading data, make sure your network is on.</h3>`;
    }

    fetch(path)
        .then(function(res) {
        return res.json()
    })

    .then(function(json) {
        let resultsHTML = ''
            json.data.forEach(function(obj) {
                const url = obj.images.fixed_width.url
                const width = obj.images.fixed_width.width
                const height = obj.images.fixed_width.height
                const alt = obj.title;
                resultsHTML += `
                <div class="box">
                    <div class="content">
                        <figure>
                            <img src="${url}" width="${width}" height="${height}" alt="${alt}">
                            <figcaption>${alt}</figcaption>
                        </figure>
                    </div>
                </div>
                `
            })

            resultsEl.innerHTML = resultsHTML
        })
        
        .catch( errorHandling )
};


