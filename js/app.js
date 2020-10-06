const container = document.querySelector(".container")
const coffees = [
    { name: "clay", image: "../images/img_1.jpg" },
    { name: "clay", image: "../images/img_10.jpg" },
    { name: "clay", image: "../images/img_2.jpg" },
    { name: "clay", image: "../images/img_3.jpg" },
    { name: "clay", image: "../images/img_4.jpg" },
    { name: "clay", image: "../images/img_5.jpg" },
    { name: "clay", image: "../images/img_6.jpg" },
    { name: "clay", image: "../images/img_7.jpg" },
    { name: "clay", image: "../images/img_8.jpg" },
    { name: "clay", image: "../images/img_9.jpg" },
    { name: "clay", image: "../images/img_10.jpg" },
    { name: "clay", image: "../images/person_1.jpg" },
    { name: "clay", image: "../images/person_2.jpg" },
    { name: "clay", image: "../images/person_3.jpg" },
    { name: "clay", image: "../images/person_4.jpg" },
    { name: "clay", image: "../images/person_5.jpg" },
    { name: "clay", image: "../images/person_6.jpg" },
    { name: "clay", image: "../images/person_7.jpg" },
    { name: "clay", image: "../images/logo.png" },
]

const showObject = () => {
    let output = ""
    coffees.forEach(
        ({ name, image }) =>
            (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Object</a>
                </div>
                `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showObject)


if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("./serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}