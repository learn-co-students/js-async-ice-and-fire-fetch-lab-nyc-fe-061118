$(document).ready(function() {
  fetchBooks();
  fetchHouses();
})

function fetchHouses() {
  // fetch the houses 
  // put them on the page
}
fetch('https://anapioficeandfire.com/api/houses')
.then(resp => resp.json())
.then(renderHouses)


function fetchBooks() {
 fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(renderBooks)
}


function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}


function renderHouses(json) {
  const main = document.querySelector('main')
  json.forEach(house => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${house.name}</h2>`
    main.appendChild(h2)
  })
}


