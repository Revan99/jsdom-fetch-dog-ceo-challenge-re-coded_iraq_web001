console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
document.addEventListener('DOMContentLoaded',()=>{fetch(imgUrl).then(response=>response.json()).then(data=>{console.log(data)
  let container = document.getElementById('dog-image-container')
  container.innerHTML=`<img src="${data.message[0]}" alt="img1">
  <img src="${data.message[1]}" alt="img2">
  <img src="${data.message[2]}" alt="img3">
  <img src="${data.message[3]}" alt="img4">`
}).catch(err=>{console.log(err)})}
fetch(imgUrl).then(response=>response.json()).then(data=>{console.log(data)
  let container = document.getElementById('dog-image-container')
  container.innerHTML=`<img src="${data.message[0]}" alt="img1">
  <img src="${data.message[1]}" alt="img2">
  <img src="${data.message[2]}" alt="img3">
  <img src="${data.message[3]}" alt="img4">`
}).catch(err=>{console.log(err)})}
)
