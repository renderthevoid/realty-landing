import { scrollEffect } from './js/scroll'
import { closeModal, openModal } from './js/modal'
import { burgerMenu } from './js/toggleMenu'
import './scss/style.scss'
import { tabsToggle } from './js/tabs'
import { onSubmitForm } from './js/formValidation'

scrollEffect('.hero')
scrollEffect('.contacts')

openModal('.open-modal', '.modal[data-modal="question"]')
openModal('.open-modal-mobile', '.modal[data-modal="question"]')
closeModal()

burgerMenu('.menu')

onSubmitForm('.consult-form__btn')

const swiper = new Swiper('.swiper', {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 60,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  keyboard: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 350,
    },
    1265: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
})

tabsToggle('.work__tab', '.work__tabs', '.tab-content')

const inputElement = document.querySelector('.consult-form__phone') // ищем наш единственный input
const maskOptions = {
  mask: '+{7}(900)000-00-00',
}
IMask(inputElement, maskOptions)



window.addEventListener('DOMContentLoaded', () => {
  let menu = document.querySelector('.menu__items')
  let btn = document.querySelector('.top-button')

  if (window.location.hash != '') {
    scrollToId(window.location.hash)
  }

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__link')) {
      e.preventDefault()
      scrollToId(e.target.hash)
    }
  })
  // btn.addEventListener("click", () => {
  // 	scrollToY(0);
  // });

  function scrollToId(id) {
    let target = document.querySelector(id)
    let styles = window.getComputedStyle(target)

    if (target !== null) {
      let position =
        rightOffsetTop(target) -
        menu.clientHeight -
        parseFloat(styles.marginTop)
      scrollToY(position)
    }
  }
})

function rightOffsetTop(node) {
  let coords = node.getBoundingClientRect()
  return coords.top + window.pageYOffset
}

function scrollToY(pos) {
  window.scrollTo({
    top: pos,
    behavior: 'smooth',
  })
}
