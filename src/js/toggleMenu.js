import { debounce } from './debounce'

export const burgerMenu = (selector) => {
  let menu = document.querySelector(selector)
  let button = menu.querySelector('.menu__button', '.menu__lines')
  let links = menu.querySelectorAll('.menu__item')
  let overlay = menu.querySelector('.menu__overlay')

  const toggleMenu = () => {
    menu.classList.toggle('active')
    if (menu.classList.contains('active')) {
      document.querySelector('body').style.overflow = 'hidden'
    } else {
      document.querySelector('body').style.overflow = 'visible'
    }
  }

  button.addEventListener('click', (e) => {
    e.preventDefault()
    toggleMenu()
  })

  window.addEventListener(
    'resize',
    debounce(() => {
      links.forEach((link) => {
        if (window.innerWidth < 1096) {
          link.addEventListener('click', toggleMenu)
        } else {
          link.removeEventListener('click', toggleMenu)
        }
      })
    }, 250)
  )
  window.addEventListener(
    'load', () => {
      links.forEach((link) => {
        if (window.innerWidth < 1096) {
          link.addEventListener('click', toggleMenu)
        } else {
          link.removeEventListener('click', toggleMenu)
        }
      })
    }
  )

  overlay.addEventListener('click', toggleMenu)
}
