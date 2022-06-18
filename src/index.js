console.log('%c HI', 'color: firebrick')

//grab URLS and put them in each in a variable
//use fetch(URL) to access api
//first .then arrow function to get response as jjson res => res.json())
//second .then to use data as a parameter, grab content data.message and put it in a variable
// variable.forEach, function to create img in another variable for each img, define src value, append container

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", pageLoad)

function pageLoad () {
    console.log("pageLoaded")

//challenge 1

fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        let dogPics = data.message;
        dogPics.forEach(pic => {
            let img = document.createElement('img');
            img.src = pic
            document.querySelector('#dog-image-container').append(img)
        })
    })

//challenge 2 & 3

fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        let dogBreeds = Object.keys(data.message)
        dogBreeds.forEach(function(breed){
            let li = document.createElement('li');
            li.textContent = breed;
            document.querySelector('#dog-breeds').append(li);
        
        li.addEventListener("click", () => li.style.color = "red")
        })
    

//challenge 4

let dropdown = document.querySelector("#breed-dropdown")

dropdown.addEventListener("change", dropdownHandler )

function dropdownHandler (event) {
    let letter = event.target.value
    let dogBreedSection = document.querySelector('#dog-breeds')
    dogBreedSection.textContent = ""
    let breedFilter = dogBreeds.filter(breed =>breed[0] === letter)

    breedFilter.forEach(breed => {
        let li = document.createElement("li")
        li.textContent = breed;
        dogBreedSection.append(li)
        li.addEventListener("click",() => li.style.color = "red")
    })
}
    })
}