import axios from 'axios'

console.log('Hello World');


document.querySelector('#get-random-fossil').addEventListener('click', () => {
    
axios.get('/random-fossil.json')
    .then(res => {
      console.log(res)  
        document.querySelector('#random-fossil-image').innerHTML= '<img src="' + res.data.img + '"/>'
        document.querySelector('#random-fossil-name').innerText = res.data.name
    })
})