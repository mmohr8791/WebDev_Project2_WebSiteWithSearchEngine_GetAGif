// main.js //

const searchForm = document.querySelector('.js-search-form');
const searchInput = document.querySelector('.js-search-input');
const resultsEl = document.querySelector('.js-results');
const searchNum = document.querySelector('.js-search-num');

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const q = searchInput.value;
    const limit = searchNum.value;
    search(q, limit);
})

function search (q, limit) {
    const apiKey = "?";
    const path = '?'
}

fetch(path)
    .then(function(res) {
        return res.json()
    })

    .then(function(json) {
        let resultsHTML = "json.data.forEach(function(obj) {
            const url = obj.images.fixed_width.url
            const width = obj.images.fixed_width.height
            const height = obj.images.fixed_width.height
            const alt = obj.title
            resultsHTML +=
                <div class="box">
                <div class="content">
                    <figure>
                        <img src="${url}" width="${width}" height="${height}" alt="${alt}"></img>
                        <figcaption>${alt}</figcaption>
                    </figure>
                </div>
            </div>
        })
        resultsEl.innerHTML = resultsHTML;
    })

