console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener('DOMContentLoaded',()=>{fetch(imgUrl).then(response=>response.json()).then(data=>{console.log(data)
  let container = document.getElementById('dog-image-container')
  container.innerHTML=`<img src="${data.message[0]}" alt="img1">`
}).catch(err=>{console.log(err)})})