const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.menu-open')
const menuBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')

menuBtn.addEventListener('click', () => {
  overlay.style.display = "block"
  menu.style.width = "70%"
  menu.style.paddingLeft = "2em"
})

closeBtn.addEventListener('click', () =>{
  overlay.style.display = "none"
  menu.style.width = "0"
  menu.style.padding = "0"
})