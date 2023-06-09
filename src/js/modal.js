export const openModal = (triggerSelector, modalDataSelector) => {
  const trigger = document.querySelector(triggerSelector)
  const modal = document.querySelector(modalDataSelector)

  if (!trigger || !modal) return
  trigger.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.add('modal_active')
  })
}

export const closeModal = () => {
  const modals = document.querySelectorAll('.modal')
  if (!modals) return
  modals.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('.modal__close')) {
        el.classList.remove('modal_active')
      }
      if (!e.target.closest('.modal__body')) {
        el.classList.remove('modal_active')
      }
    })
  })
}
