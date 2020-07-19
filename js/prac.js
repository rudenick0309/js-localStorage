const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')

let itemsArray = []


localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))
//setItem은 stringify, getItem은 parse  !!


const liMaker = text => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
    // console.log(localStorage)
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    liMaker(input.value)
    input.value = ''
})

data.forEach(item => {
    liMaker(item)
})  

button.addEventListener('click', function() {
    localStorage.clear()    
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})

let items

if (localStorage.getItem('items')) {
  items = JSON.parse(localStorage.getItem('items'))
} else {
  items = []
}

// console.log(localStorage)
