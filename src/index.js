console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
window.addEventListener('DOMContentLoader',()=>{fetch(imgUrl).then(response=>response.json()).then(data=>console.log(data)).catch(err=>console.log(err))})