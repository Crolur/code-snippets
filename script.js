// container for cards
const wrapper = document.querySelector(".wrapper")

//fetch data from JSON
fetch('html.json')
  .then(response => {
    if (response.status === 200) {
      return response.json()
    }
  })
  .then(data => {
    // execute printing function
    printCards(data)
  })
  .catch(err => {
    console.log(err.message)
  })

// printing function
const printCards = data => {
  data.cardList.map((card, index) => {
    // set the template
    const cardItem = document.createElement("div")
    cardItem.classList.add("card")
    cardItem.setAttribute('key', index)
    cardItem.innerHTML += ` 
                  <div class="card-title">
                  </div>
                 `
    // fill the template with data
    cardItem.querySelector(".card-title").innerText = card.name
    card.code.map((snippet, index) => {
      const visual = document.createElement('div')
      visual.classList.add('card-visual')
      visual.setAttribute('key', index)
      visual.innerHTML = snippet
      const code = document.createElement('div')
      code.classList.add('card-code')
      code.setAttribute('key', index)
      code.innerText = snippet
      cardItem.appendChild(visual)
      cardItem.appendChild(code)
    })
    // append the card to the wrapper
    wrapper.appendChild(cardItem)
  })
}

// copy to clipboard
copiedLabel = document.querySelector('.copied')

const copy = (e) => {
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

wrapper.addEventListener('click', e => {
  if (e.target.classList.contains('card-code')) {
    copy(e)
  }
})


// accordion

wrapper.addEventListener('click', (e) => {
  if(e.target.classList.contains('card-title')) {
    e.target.classList.toggle('closed')
    e.target.parentElement.classList.toggle('closed')
  }
})