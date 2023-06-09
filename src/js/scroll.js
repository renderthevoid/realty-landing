export const scrollEffect = (selector) => {
  const elem = document.querySelector(selector)
  document.addEventListener('scroll', () => {
    const { y } = elem.getBoundingClientRect()
    elem.style.backgroundPositionY = `0${0.8 * -y}px`
  })
}
