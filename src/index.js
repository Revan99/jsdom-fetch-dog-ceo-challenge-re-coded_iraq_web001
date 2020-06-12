console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
document.addEventListener('DOMContentLoaded',()=>{fetch(imgUrl).then(response=>response.json()).then(data=>{console.log(data)
  let container = document.getElementById('dog-image-container')
  container.innerHTML=`<img src="${data.message[0]}" alt="img1">
  <img src="${data.message[1]}" alt="img2">
  <img src="${data.message[2]}" alt="img3">
  <img src="${data.message[3]}" alt="img4">`
}).catch(err=>{console.log(err)});

fetch(breedUrl).then(response1=>response1.json()).then(data1=>{console.log(data1)
let container1 = document.getElementById('dog-breeds')
  container1.innerHTML=`
  <li><img src="${data1.message[0]}" alt="img1"></li>
  <li><img src="${data1.message[1]}" alt="img2"></li>
  <li><img src="${data1.message[2]}" alt="img3"></li>
  <li><img src="${data1.message[3]}" alt="img4"></li>`
}).catch(err1=>{console.log(err1)})})
