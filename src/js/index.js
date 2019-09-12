// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import dataJson from '../../date.json';

const addNewInput = document.querySelector('#addNewInput')
// const inputs =  document.querySelector(".container__input")
const loadButton = document.querySelector('#load')
const sendButton = document.querySelector('#send')

const nameFields = document.querySelectorAll('.nameField')
const phoneFields = document.querySelectorAll('.phoneField')
const seletField = document.querySelector('#typeField')

const names = ['Иванов', 'Смирнов Владимир', 'Кузнецов Алексей', 'Попов Игорь', 'Петров Петр', 'Новикова Алена', 'Волков Сергей', 'Егоров Егор', 'Федор Бондарчук', 'А я Никита']

//render default
renderContent(1)

//
addNewInput.addEventListener('click', ()=> {
  const inputContainer = document.createElement('div')
  inputContainer.classList.add('container__input')
  inputContainer.innerHTML = `
    <input class="nameField" type="text" placeholder="" name='name'>
    <input class="phoneField" type="tel" placeholder="+7 000 000 000" name='phone'>
  `
  document.querySelector("#container__form-input").appendChild(inputContainer)
})

//
loadButton.addEventListener('click', ()=> {
  const nameFields = document.querySelectorAll('.nameField')
  const phoneFields = document.querySelectorAll('.phoneField')

  nameFields.forEach((item) => {
    if (item.value) return
    //генерируем Имя и Фамилию из массива
    item.value = names[Math.floor(Math.random() * (11))]
  })

  phoneFields.forEach((item) => {
    if (item.value) return
    //генерируем номер телефона в формате +7 (9хх) хххххх
    item.value = `+7 (9${Math.floor(Math.random()* 100)}) ${Math.floor(Math.random()* 1000000)}`
   })

   renderContent(seletField.value)
})

//
sendButton.addEventListener('click', () => {
  const dataForSend = dataJson[seletField.value]
  const inputsContainer =  document.querySelectorAll(".container__input")
  for (let i = 0; i < inputsContainer.length; i+= 1) {
    let inputs = inputsContainer[i].children
    let personNumber = `person${i + 1}`
    dataForSend[personNumber] = {}
    for (let i = 0; i < inputs.length; i+= 1) {
      let name = inputs[i].name
      dataForSend[personNumber][name] = inputs[i].value
      
    }



    // console.log(inputs[i])
  }
  fetch('127.0.0.1', {method: 'POST', body:JSON.stringify(dataForSend)})
    .then(() => alert(dataForSend))
    .catch(error => alert(error))
})


//data
function renderContent(id) {
  const data = dataJson[id]
  const typeContainer = document.querySelector('#type-container')
  const tabel = document.querySelector('#tabel')
  const totalArea = document.querySelector('#totalArea').innerHTML = `
  <div  class="vid__item">Площадь.......<span id="totalArea" class="vid__item-date">${data.totalArea}</span></div>`

  const mainInfo = data.main.map((item) => {
    return `<li class="vid__item">${item.title} <span class="vid__item-date">${item.value}</span></li>`
  }).join('')

  typeContainer.innerHTML = mainInfo

  const detailInfo = data.area.map((item) =>{
    return `
    <div class="container-tabel">
      <div class="">${item.title}</div>
      <ul>
        ${item.detail.map((itemArea) => {
          return `
          <li class="tabel__item">${itemArea.title}<span class="tabel__date">${itemArea.value}</span></li>
          `
        }).join('')}
        
      </ul>
    </div>
  `
  }).join('')

  tabel.innerHTML = detailInfo

}
