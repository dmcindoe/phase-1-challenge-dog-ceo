console.log('%c HI', 'color: firebrick')

const init = () => {
  puppyImages() 

 
  const breedUrl = "https://dog.ceo/api/breeds/list/all" 
  let breeds; 
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
      breeds = Object.keys(data.message)
      addBreedsToList(breeds) 
    })

  
  let selectDropdown = document.querySelector("#breed-dropdown")
  selectDropdown.addEventListener("change", (event) => { 
    event.preventDefault()
    const selectedLetter = event.target.value 
    const selectedBreeds = breeds.filter(breed => breed.startsWith(selectedLetter)) 
    document.querySelector("#dog-breeds").innerHTML = "" 
    addBreedsToList(selectedBreeds)
  })
}

const puppyImages = () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
  fetch(imgUrl) 
    .then(resp => resp.json()) 
    .then(data => {
      const imageContainer = document.querySelector("#dog-image-container") 
      data.message.forEach(imageUrl => {
        image = document.createElement("img")  
        image.src = imageUrl 
        imageContainer.append(image)  
      })
    })
}


const addBreedsToList = (breeds) => {
  const listContainer = document.querySelector("#dog-breeds")
  breeds.forEach(breed => { 
    item = document.createElement("li") 
    item.innerHTML = breed 
    listContainer.append(item) 
  })
}

document.addEventListener('DOMContentLoaded', init)
