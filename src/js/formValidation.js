const PHONE_REGEXP = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/
const EMAIL_REGEXP =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

const form = document.querySelector('.consult-form')
const submitBtn = document.querySelector('.consult-form__btn')
const nameInput = document.querySelector('.consult-form__input')
const phoneInput = document.querySelector('.consult-form__phone')
const emailInput = document.querySelector('.consult-form__email')
const caution = document.querySelector('.consult-form__caution')

const isPhoneValid = (value) => {
  return PHONE_REGEXP.test(value)
}
const isEmailValid = (value) => {
  return EMAIL_REGEXP.test(value)
}
const checkCheckbox = () => {
  const checkbox = document.querySelector('.checkbox-item')
  return checkbox.checked ? true : false
}

export const onSubmitForm = (btnSelector) => {
  const submitBtn = document.querySelector(btnSelector)
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (
      nameInput.value.length &&
      isPhoneValid(phoneInput.value) &&
      isEmailValid(emailInput.value) &&
      checkCheckbox()
    ) {
      form.innerHTML = `<div>Успех</div>`
    } else {
        caution.innerText = `Заполнены не все поля`
    }
  })
}
