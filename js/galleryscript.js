const renderCards = (cardsContainer, cards) => {
  cardsContainer.innerHTML = "";

  cards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("col", "fade-in");

    cardElement.innerHTML = `
      <div class="card border-0 bg-transparent position-relative">
        <div class="card-body">
          <div class="imgh">
            <div class="nimg mb1">
              <img src="../${card.image}" class="shadow-sm rounded cover-image w-100" alt="Before and After">
            </div>
          </div>
        </div>
      </div>
    `;

    cardsContainer.appendChild(cardElement);

    setTimeout(() => {
      cardElement.classList.add("show");
    }, index * 20);
  });
};

const data = {
  cards: [
    {
        "image": "images/before&after/Untitled design (10).png"
    },
    {
        "image": "images/before&after/Untitled design (11).png"
    },
    {
        "image": "images/before&after/Untitled design (12).png"
    },
    {
        "image": "images/before&after/Untitled design (13).png"
    },
    {
        "image": "images/before&after/Untitled design (14).png"
    },
    {
        "image": "images/before&after/Untitled design (15).png"
    },
    {
        "image": "images/before&after/Untitled design (16).png"
    },
    {
        "image": "images/before&after/Untitled design (17).png"
    },
    {
        "image": "images/before&after/Untitled design (18).png"
    },
    {
        "image": "images/before&after/Untitled design (19).png"
    },
    {
        "image": "images/before&after/Untitled design (20).png"
    },
    {
        "image": "images/before&after/Untitled design (22).png"
    },
    {
        "image": "images/before&after/Untitled design (23).png"
    },
    {
        "image": "images/before&after/Untitled design (24).png"
    },
    {
        "image": "images/before&after/Untitled design (25).png"
    },
    {
        "image": "images/before&after/Untitled design (26).png"
    },
    {
        "image": "images/before&after/Untitled design (27).png"
    },
    {
        "image": "images/before&after/Untitled design (28).png"
    },
    {
        "image": "images/before&after/Untitled design (29).png"
    },
    {
        "image": "images/before&after/Untitled design (3).png"
    },
    {
        "image": "images/before&after/Untitled design (30).png"
    },
    {
        "image": "images/before&after/Untitled design (31).png"
    },
    {
        "image": "images/before&after/Untitled design (32).png"
    },
    {
        "image": "images/before&after/Untitled design (33).png"
    },
    {
        "image": "images/before&after/Untitled design (34).png"
    },
    {
        "image": "images/before&after/Untitled design (35).png"
    },
    {
        "image": "images/before&after/Untitled design (36).png"
    },
    {
        "image": "images/before&after/Untitled design (37).png"
    },
    {
        "image": "images/before&after/Untitled design (38).png"
    },
    {
        "image": "images/before&after/Untitled design (39).png"
    },
    {
        "image": "images/before&after/Untitled design (4).png"
    },
    {
        "image": "images/before&after/Untitled design (40).png"
    },
    {
        "image": "images/before&after/Untitled design (41).png"
    },
    {
        "image": "images/before&after/Untitled design (42).png"
    },
    {
        "image": "images/before&after/Untitled design (43).png"
    },
    {
        "image": "images/before&after/Untitled design (44).png"
    },
    {
        "image": "images/before&after/Untitled design (45).png"
    },
    {
        "image": "images/before&after/Untitled design (46).png"
    },
    {
        "image": "images/before&after/Untitled design (47).png"
    },
    {
        "image": "images/before&after/Untitled design (48).png"
    },
    {
        "image": "images/before&after/Untitled design (5).png"
    },
    {
        "image": "images/before&after/Untitled design (6).png"
    },
    {
        "image": "images/before&after/Untitled design (7).png"
    },
    {
        "image": "images/before&after/Untitled design (8).png"
    },
    {
        "image": "images/before&after/Untitled design (9).png"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-25 at 4.21.19 PM (1).jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-25 at 4.21.19 PM (2).jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-25 at 4.42.59 PM.jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-25 at 4.43.00 PM (1).jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-25 at 4.43.01 PM.jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-25 at 4.43.02 PM.jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-26 at 1.16.20 PM.jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-26 at 1.16.21 PM (1).jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-26 at 1.16.37 PM (1).jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-26 at 1.16.37 PM (2).jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-26 at 1.16.38 PM (1).jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-26 at 1.16.39 PM.jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-26 at 1.16.44 PM.jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-26 at 1.16.46 PM.jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-26 at 1.16.47 PM.jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-26 at 1.16.49 PM (2).jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-26 at 1.16.51 PM.jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-26 at 1.16.52 PM (1).jpeg"
    },
    {
        "image": "images/before&after/WhatsApp Image 2026-04-26 at 1.16.52 PM.jpeg"
    }
]
};

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("cards-container");
  if (cardsContainer) {
    renderCards(cardsContainer, data.cards);
  }
});
