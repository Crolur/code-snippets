const cardList = [
  {
    name: "Paragraf",
    code: [
      `<p>tekst</p>
      <p>tekst</p>`,
    ],
  },
  {
    name: "Span",
    code: [
      `<span>tekst</span>
      <span>tekst</span>`,
    ],
  },
  {
    name: "Lista nieuporządkowana",
    code: [
      `<ul>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
            </ul>`,
      `<ul style='list-style: none '>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
            </ul>`,
      `<ul>
            <li style='list-style: none '>Element 1</li>
            <li>Element 2</li>
            <li style='list-style: none '>Element 3</li>
            </ul>`,
    ],
  },
  {
    name: "Lista uporządkowana",
    code: [
      `<ol>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
            </ol>`,
      `<ol style='list-style: none '>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
            </ol>`,
      `<ol>
            <li style='list-style: none '>Element 1</li>
            <li>Element 2</li>
            <li style='list-style: none '>Element 3</li>
            </ol>`,
    ],
  },
  {
    name: "Bold",
    code: [
      `tekst <strong>tekst</strong> tekst`,
      `tekst <span style='font-weight: bold '>tekst</span> tekst`,
    ],
  },
  {
    name: "Kursywa",
    code: [
      `tekst <i>tekst</i> tekst`,
      `tekst <span style='font-style: italic '>tekst</span> tekst`,
    ],
  },
  {
    name: "Link",
    code: [
      `<a href='https://www.google.com/'>Link</a>`,
      `<a target='_blank' href='https://www.google.com/' >Link - nowa karta</a>`,
    ],
  },
  {
    name: "Podkreślenie",
    code: [
      `<u>tekst</u>`,
      `<span style='text-decoration: underline '>tekst</span>`,
    ],
  },
  {
    name: "Przekreślenie",
    code: [
      `<s>tekst</s>`,
      `<span style='text-decoration: line-through '>tekst</span>`,
    ],
  },
  {
    name: "Kolor tekstu",
    code: [
      `<span style='color: red '>tekst</span>`,
      `<span style='color: #ff0000 '>tekst</span>`,
    ],
  },
]

// container for cards
const wrapper = document.querySelector(".wrapper")

cardList.map((card, index) => {
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
    console.log(snippet)
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
