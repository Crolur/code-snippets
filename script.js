const cardList = [
  {
    name: "Paragraf",
    code: `<p>tekst</p>
        <p style='color:red;'>tekst</p>
        <br>
        <p style='font-weight:bold; '>tekst</p>
        <p style='font-weight:bold; color:red; '>tekst</p>`,
  },
  {
    name: "Span",
    code: `<span>tekst</span>
        <span style='color:red; '>tekst</span>
        <span style='font-weight:bold; '>tekst</span>
        <span style='font-weight:bold; color:red; '>tekst</span>`,
  },
  {
    name: "Lista nieuporządkowana",
    code: `<ul>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
            </ul>`,
  },
  {
    name: "Lista uporządkowana",
    code: `<ol>
                <li>Element 1</li>
                <li>Element 2</li>
                <li>Element 3</li>
                </ol>`,
  },
  {
    name: "Bold",
    code: `tekst <strong>tekst</strong> tekst`,
  },
  {
    name: "Kursywa",
    code: `tekst <i>tekst</i> tekst
          <p style='font-style: italic; '>tekst</p>`,
  },
  {
    name: "Link",
    code: `<a href='https://www.google.com/'>Link</a>
          <br>
          <a target='_blank' href='https://www.google.com/'>Link - nowa karta</a>`,
  },
  {
    name: "Podkreślenie",
    code: `<u>tekst</u>
          <p style='text-decoration: underline; '>tekst</p>`,
  },
  {
    name: "Przekreślenie",
    code: `<s>tekst</s>
          <p style='text-decoration: line-through; '>tekst</p>`,
  },
];

// container for cards
const wrapper = document.querySelector(".wrapper");

cardList.map((card, index) => {

  // set the template
  const cardItem = document.createElement("div");
  cardItem.classList.add("card");
  cardItem.setAttribute('key', index);
  cardItem.innerHTML = ` 
                <div class="card-title"></div>
                <div class="card-content">
                    <div class="card-visual">
                    </div>
                    <div class="card-code">
                    
                    </div>
                </div>
            `;

  // fill the template with data
  cardItem.querySelector(".card-title").innerText = card.name;
  cardItem.querySelector(".card-visual").innerHTML = card.code;
  cardItem.querySelector(".card-code").innerText = card.code;

  // append the card to the wrapper
  wrapper.appendChild(cardItem);
});