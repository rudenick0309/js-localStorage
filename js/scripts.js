const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')

// 위에 보면 쿼리 셀렉터를 한 다음에, 괄호 안에 콤마가 없어도 되는건가?
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : []


localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = text => {    // => 이거는 뭐야?
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

form.addEventListener('submit', function(e) {  //왜 input에 붙는 게 아니지?
    e.preventDefault()

    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    liMaker(input.value)   //여기서 liMaker로 input.value를 준 다음에!!!출력이 되고 나서!
    input.value = ''    //input 란에는 비게 하는거지??
})

data.forEach(item => {
  liMaker(item)
})   // 이건 뭐냐? 왜 있지?

button.addEventListener('click', function() {
  localStorage.clear()
  while (ul.firstChild) {   //while이 뭐지? firstChild는 또 뭐고?
    ul.removeChild(ul.firstChild)
  }
})

// let items

// if (localStorage.getItem('items')) {
//   items = JSON.parse(localStorage.getItem('items'))
// } else {
//   items = []
// }


