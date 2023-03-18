const cardList = [
  {
    name: "Paragraf",
    code: [
      `<p>tekst</p>`,
      `<p style='color:red;'>tekst</p>`,
      `<p style='font-weight:bold; '>tekst</p>`,
      `<p style='font-weight:bold; color:red; '>tekst</p>`,
],
  },
  {
    name: "Span",
    code: [
      `<span>tekst</span>`,
        `<span style='color:red; '>tekst</span>`,
        `<span style='font-weight:bold; '>tekst</span>`,
        `<span style='font-weight:bold; color:red; '>tekst</span>`,
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
    ],
  },
  {
    name: "Bold",
    code: [
      `tekst <strong>tekst</strong> tekst`,
  ],
  },
  {
    name: "Kursywa",
    code: [
      `tekst <i>tekst</i> tekst`,
          `<p style='font-style: italic; '>tekst</p>`,
    ],
  },
  {
    name: "Link",
    code: [
      `<a href='https://www.google.com/'>Link</a>`,
          `<a target='_blank' href='https://www.google.com/'>Link - nowa karta</a>`,
    ],
  },
  {
    name: "Podkreślenie",
    code: [
      `<u>tekst</u>`,
          `<p style='text-decoration: underline; '>tekst</p>`,
    ],
  },
  {
    name: "Przekreślenie",
    code: [
      `<s>tekst</s>`,
          `<p style='text-decoration: line-through; '>tekst</p>`,
    ],
  },
];

// container for cards
const wrapper = document.querySelector(".wrapper");

cardList.map((card, index) => {
  console.log(card)
  // set the template
  const cardItem = document.createElement("div");
  cardItem.classList.add("card");
  cardItem.setAttribute('key', index);
  cardItem.innerHTML += ` 
                <div class="card-title">
                </div>
               `;
               
  // fill the template with data
  cardItem.querySelector(".card-title").innerText = card.name;
  
  card.code.map((snippet, index) => {
    console.log(snippet)
    const visual = document.createElement('div');
    visual.classList.add('card-visual')
    visual.setAttribute('key', index)
    visual.innerHTML = snippet
    
    const code = document.createElement('div');
    code.classList.add('card-code')
    code.setAttribute('key', index)
    code.innerText = snippet

    cardItem.appendChild(visual)
    cardItem.appendChild(code)
  })

  // append the card to the wrapper
  wrapper.appendChild(cardItem);
});
