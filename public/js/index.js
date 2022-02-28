const body = document.querySelector("body")
const header = document.querySelector("header")

const menu = document.querySelector(".header .header__nav-btn")
const close = document.querySelector(".header .header__nav-close")

menu.addEventListener('click', (event) => {
  event.preventDefault()
  header.className = "toggle-menu"

  body.style.overflow = "hidden"
})

close.addEventListener('click', (event) => {
  event.preventDefault()
  header.className = ""

  body.style.overflow = "auto"
})
