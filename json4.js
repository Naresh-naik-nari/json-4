let loader = document.getElementById("loader")
let container = document.createElement("container")
container.className = ("container")
const url = 'https://alpine-balsam-rocket.glitch.me/result';
const options = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    },
};

async function getTopRatedMovies() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("http error :")
        }
        const result = await response.json();
        loader.remove()
        displayData(result);
    } catch (err) {
        console.error(err);
    }
}

function displayData(movies) {
    movies.forEach(obj => {
        let item = document.createElement("div")
        item.className = "item"
        item.innerHTML = `
            <img src='${obj.Poster_Link}' class='image'>
            <p>Rank : ${obj.rank}</p>
            <p>Series_Title :${obj.Series_Title}</p>
            <p>Genre :${obj.Genre}</p>
            <p>Overview :${obj.Overview}</p>

    `;
        container.appendChild(item)
    });
    document.body.appendChild(container)
}
window.addEventListener("DOMContentLoaded", function () {
    getTopRatedMovies()
})


