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

// rendering function
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

// create wrapper for cards
const createWrapper = (cards) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  cards.forEach(card => {
    wrapper.appendChild(createCardElement(card))
  });

  return wrapper
}

// create and append cards to wrapper
const createCardElement = (card) => {
  const cardElement = document.createElement('div')
  cardElement.classList.add('card')

  cardElement.appendChild(createCardTitleElement(card))

  card.code.forEach(code => {
    cardElement.appendChild(createCardVisualElement(code))
    cardElement.appendChild(createCardCodeElement(code))
  })

  return cardElement
}

// create and append title to card
const createCardTitleElement = card => {
  const titleElement = document.createElement('div')
  titleElement.classList.add('card-title')

  titleElement.innerText = card.name

  return titleElement
}

// create and append visual to card
const createCardVisualElement = code => {
  const visualElement = document.createElement('div')
  visualElement.classList.add('card-visual')

  visualElement.innerHTML = code

  return visualElement
}

// create and append code to card
const createCardCodeElement = code => {
  const codeElement = document.createElement('div')
  codeElement.classList.add('card-code')

  codeElement.innerText = code

  return codeElement
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