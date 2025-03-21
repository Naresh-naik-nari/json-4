let container = document.createElement("div")
container.className = "container"
let loader = document.getElementById("loader")
async function getRandomUsers() {
    try {
        let response = await fetch("https://dog.ceo/api/breeds/image/random")
        if (!response.ok) {
            throw new Error("Something is Wrong")
        }
        let data = await response.json();
        displayData(data);
    } catch (err) {
        console.error(err)
    }
}

function displayData(image) {
    let imageurl = image.message;
    container.innerHTML = `
    <p class='text'>Dog Images</p>
    <div>
    <img src="${imageurl}" class='image'>
    </div>
    `;
}

document.body.appendChild(container)

window.addEventListener("DOMContentLoaded", function () {
    
    setInterval(() => {
        getRandomUsers();
        loader.remove()
    }, 500)
})
