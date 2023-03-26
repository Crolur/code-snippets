//fetch header and footer content from JSON
fetch('header_footer.json')
  .then(response => {
    if (response.status === 200) {
      return response.json()
    }
  })
  .then(headerFooterData => {
    // render header
    const header = document.querySelector('header')
    header.appendChild(createHeader(headerFooterData))

    // render footer
    const footer = document.querySelector('footer')
    footer.appendChild(createFooter(headerFooterData))
  })
  .catch(err => {
    console.log(err.message)
  })


//fetch main content from JSON
fetch('html.json')
  .then(response => {
    if (response.status === 200) {
      return response.json()
    }
  })
  .then(cards => {
    // execute rendering function
    renderPage(cards.cardList)
  })
  .catch(err => {
    console.log(err.message)
  })

// page rendering function
const renderPage = (cards) => {
  // render main content
  const main = document.querySelector('main')
  main.appendChild(createCopiedLabel())
  sortAlphabetically(cards)
  main.appendChild(createSideMenu(cards))
  main.appendChild(createWrapper(cards))

  // set all event listeners
  setEventListeners()
}

// sorting elements alphabetically
const sortAlphabetically = (cards) => {
  cards.sort((firstItem, secondItem) => firstItem.name.charCodeAt() - secondItem.name.charCodeAt())

  return cards
}


// create copied label
const createCopiedLabel = () => {
  const copiedLabel = document.createElement('div')
  copiedLabel.classList.add('copied')
  copiedLabel.innerText = 'Skopiowano!'

  return copiedLabel
}

// create header
const createHeader = (headerFooterData) => {
  const headerElement = document.createElement('h1')
  headerElement.innerText = headerFooterData.header_footer[0].name

  return headerElement
}

// create footer
const createFooter = (headerFooterData) => {
  const footerElement = document.createElement('ul')

  headerFooterData.header_footer.forEach(e => {
    const footerElementItemLink = document.createElement('a')
    footerElementItemLink.setAttribute('href', e.link)
    footerElementItemLink.innerText = e.name

    const footerElementItem = document.createElement('li')
    footerElementItem.appendChild(footerElementItemLink)

    footerElement.appendChild(footerElementItem)
  })

  return footerElement
}

// create wrapper with cards
const createWrapper = (cards) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  // create card element
  cards.forEach((card, index) => {
    const cardElement = document.createElement('div')
    cardElement.classList.add('card')
    cardElement.setAttribute('id', 'c' + index)
    wrapper.appendChild(cardElement)

    // create title element
    const titleElement = document.createElement('div')
    titleElement.classList.add('card-title')
    titleElement.innerText = card.name
    cardElement.appendChild(titleElement)

    //create visual and code elements
    card.code.forEach(code => {
      const visualElement = document.createElement('div')
      visualElement.classList.add('card-visual')
      visualElement.innerHTML = code
      cardElement.appendChild(visualElement)

      const codeElement = document.createElement('div')
      codeElement.classList.add('card-code')
      codeElement.innerText = code
      cardElement.appendChild(codeElement)
    })
  });

  return wrapper
}

// create side menu with links to cards
const createSideMenu = (cards) => {
  const sideMenu = document.createElement('div')
  sideMenu.classList.add('side-menu')

  const sideMenuList = document.createElement('ul')
  sideMenu.appendChild(sideMenuList)

  cards.forEach((card, index) => {
    const sideMenuListItem = document.createElement('li')
    const sideMenuListItemLink = document.createElement('a')
    sideMenuListItemLink.classList.add('side-menu__link')
    sideMenuListItemLink.setAttribute('href', '#c' + index)
    sideMenuListItem.appendChild(sideMenuListItemLink)
    sideMenuListItemLink.innerText = card.name
    sideMenuList.appendChild(sideMenuListItem)
  })

  return sideMenu
}

// setting event listener for different actions
const setEventListeners = () => {
  const wrapper = document.querySelector('.wrapper')
  const sideMenu = document.querySelector('.side-menu')

  wrapper.addEventListener('click', (e) => {
    // execute copy to clipboard function
    if (e.target.classList.contains('card-code')) {
      copy(e)
    }

    // toggle accordions
    if (e.target.classList.contains('card-title')) {
      e.target.classList.toggle('closed')
      e.target.parentElement.classList.toggle('closed')
    }
  })

  // open side menu
  sideMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('open')
  })

  // blink after navigating to card
  sideMenu.addEventListener('click', e => {
    if (e.target.classList.contains('side-menu__link')) {
      // get value of href
      const blinkElementId = e.target.attributes.href.value

      // change style of card with id like the href
      const blinkElement = document.querySelector(`${blinkElementId}`)
      blinkElement.classList.remove('closed')
      blinkElement.querySelector('.card-title').classList.remove('closed')
      blinkElement.classList.add('blink')
      setTimeout(() => {
        blinkElement.classList.remove('blink')
      }, 1000)
    }
  })
}


// copy to clipboard function
const copy = (e) => {
  const copiedLabel = document.querySelector('.copied')
  const toCopy = document.createElement('textArea')
  toCopy.value = e.target.innerText
  document.body.appendChild(toCopy)
  toCopy.select()
  document.execCommand('Copy')
  toCopy.remove()
  copiedLabel.classList.add('slide')
  setTimeout(() => {
    copiedLabel.classList.remove('slide')
  }, 1500)
}