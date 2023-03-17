const cardList = [
    {
      name: "Paragraf",
      code: `<p>tekst</p>
        <p style='color:red;'>tekst</p>
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
      code: `tekst <i>tekst</i> tekst`,
    },
  ];

  const cards = document.querySelector(".wrapper");

  cardList.map((card, index) => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("card");
    cardItem.innerHTML = ` 
                <div class="card-title">${card.name}</div>
                <div class="card-content">
                    <div class="card-visual">
                        ${card.code}
                    </div>
                    <div class="card-code">
                    
                    </div>
                </div>
            `;
    cardItem.querySelector(".card-code").innerText = card.code;
    cards.appendChild(cardItem);
  });