//fetch data from JSON
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
  const main = document.querySelector('main')
  main.appendChild(createCopiedLabel())
  main.appendChild(createWrapper(cards))
  setEventListeners()
}

// create copied label
const createCopiedLabel = () => {
  const copiedLabel = document.createElement('div')
  copiedLabel.classList.add('copied')
  copiedLabel.innerText = 'Skopiowano!'

  return copiedLabel
}

// create wrapper with cards
const createWrapper = (cards) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  // create card element
  cards.forEach(card => {
    const cardElement = document.createElement('div')
    cardElement.classList.add('card')
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


// setting event listener for different actions
const setEventListeners = () => {
  const wrapper = document.querySelector('.wrapper')

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
