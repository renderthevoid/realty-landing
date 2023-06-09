export const tabsToggle = (
  tabsSelector,
  tabsContainerSelector,
  tabContentSelector
) => {
  const tabs = document.querySelectorAll(tabsSelector)
  const tabContainer = document.querySelector(tabsContainerSelector)
  const tabContent = document.querySelectorAll(tabContentSelector)

  const showTabContent = (i) => {
    if (tabContent[i].classList.contains('hide')) {
      tabContent[i].classList.remove('hide')
      tabContent[i].classList.add('show')
    }
  }

  const hideTabContent = (number) => {
    for (let i = number; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show')
      tabContent[i].classList.add('hide')
    }
  }

  const eventHandler = (e) => {
    tabs.forEach((tab) => tab.classList.remove('active'))
    if (e.target && e.target.classList.contains('work__tab')) {
      for (let i = 0; i < tabs.length; i++) {
        if (e.target == tabs[i]) {
          e.target.classList.add('active')
          hideTabContent(0)
          showTabContent(i)
          break
        }
      }
    }
  }

  hideTabContent(1)
  tabs[0].classList.add('active')
  tabContainer.addEventListener('click', eventHandler)
}
