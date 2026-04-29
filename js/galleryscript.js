// Assuming you have these variables defined globally or in your script
// data.cards is your cards array
// cardsContainer is your container DOM element for cards

const defaultCategory = "alar reduction - rhinoplasty";

const renderCards = (cardsContainer, cards) => {
  cardsContainer.innerHTML = "";

  cards.forEach((card, index) => {
    const { cover = [], cover1 = [], tags = [] } = card;

    const cardElement = document.createElement("div");
    cardElement.classList.add("col", "fade-in");

    cardElement.innerHTML = `
      <div class="card border-0 bg-transparent position-relative">
        <div class="card-body">
          <div>
            <div class="imgh ${cover.length > 1 ? "has-multiple" : ""}">
              ${cover
                .map(
                  (image) => `
                    <div class="nimg mb1">
                      <img src="${image}" class="shadow-sm rounded cover-image w-100" alt="Before Image">
                    </div>`
                )
                .join("")}
            </div>
            <h5 class="mb-2 ch3">Before</h5>
          </div>

          <div>
            <div class="imgh ${cover1.length > 1 ? "has-multiple" : ""}">
              ${cover1
                .map(
                  (image) => `
                    <div class="nimg mb1">
                      <img src="${image}" class="shadow-sm rounded cover-image w-100" alt="After Image">
                    </div>`
                )
                .join("")}
            </div>
            <h5 class="mt-3 mb-2 ch3">After</h5>
          </div>
        </div>
      </div>
    `;

    cardsContainer.appendChild(cardElement);

    setTimeout(() => {
      cardElement.classList.add("show");
    }, index * 100);
  });

  const carouselItems = document.querySelectorAll(".has-multiple");
  carouselItems.forEach(initializeCarousel);
};

const renderCategories = (cards) => {
  const categoriesContainer = document.getElementById("categories");
  const allCategories = new Set();

  // Collect all unique tags
  cards.forEach((card) => {
    card.tags.forEach((tag) => allCategories.add(tag));
  });

  // Convert Set to Array and sort categories
  const sortedCategories = Array.from(allCategories).sort();

  categoriesContainer.innerHTML = sortedCategories
    .map(
      (category) =>
        `<li><a href="#" class="badge ${
          category.toLowerCase() === defaultCategory.toLowerCase() ? "active" : ""
        }"><span>${category.charAt(0).toUpperCase() + category.slice(1)}</span></a></li>`
    )
    .join("");
};

const initializeCarousel = (carouselItem) => {
  const images = carouselItem.querySelectorAll("img");
  let currentIndex = 0;

  const prevButton = document.createElement("button");
  prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(carouselItem, images, currentIndex);
  });

  const nextButton = document.createElement("button");
  nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
  nextButton.classList.add("bubble", "end-0");
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel(carouselItem, images, currentIndex);
  });

  carouselItem.appendChild(prevButton);
  carouselItem.appendChild(nextButton);

  const updateCarousel = (carouselItem, images, currentIndex) => {
    images.forEach((image, index) => {
      image.style.transform = `translateX(${index - currentIndex}00%)`;
    });
  };
};

const searchCards = (cards, searchTerm) => {
  return cards.filter((card) => {
    return (
      (card.before && card.before.toLowerCase().includes(searchTerm)) ||
      (card.after && card.after.toLowerCase().includes(searchTerm)) ||
      card.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  });
};

const filterCardsByCategory = (cards, category) =>
  cards.filter((card) => card.tags.includes(category));

const handleSearch = (event) => {
  const searchTerm = event.target.value.toLowerCase().trim();
  const selectedCategoryElement = document.querySelector("#categories a.active");
  const selectedCategory = selectedCategoryElement
    ? selectedCategoryElement.textContent.toLowerCase().trim()
    : defaultCategory.toLowerCase();

  let filteredCards = filterCardsByCategory(data.cards, selectedCategory);

  filteredCards = searchCards(filteredCards, searchTerm);

  renderCards(cardsContainer, filteredCards);
};

const handleCategoryClick = (event) => {
  event.preventDefault();

  const target = event.target.closest("a");
  if (!target) return;

  const category = target.textContent.toLowerCase().trim();

  const categoryLinks = document.querySelectorAll("#categories a");
  categoryLinks.forEach((link) => link.classList.remove("active"));
  target.classList.add("active");

  let filteredCards = filterCardsByCategory(data.cards, category);

  const searchTerm = document.querySelector('input[type="search"]').value.toLowerCase().trim();
  filteredCards = searchCards(filteredCards, searchTerm);

  renderCards(cardsContainer, filteredCards);
};

// On page load, initialize gallery
document.addEventListener("DOMContentLoaded", () => {
  renderCategories(data.cards);

  // Filter cards by default category on load
  const filteredCards = filterCardsByCategory(data.cards, defaultCategory);
  renderCards(cardsContainer, filteredCards);

  // Setup event listeners
  document.getElementById("categories").addEventListener("click", handleCategoryClick);

  const searchInput = document.querySelector('input[type="search"]');
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }
});




/*const renderCards = (cardsContainer, cards) => {
  cardsContainer.innerHTML = "";

  cards.forEach((card, index) => {
    const { cover = [], cover1 = [], tags = [] } = card;

    const cardElement = document.createElement("div");
    cardElement.classList.add("col", "fade-in");

    cardElement.innerHTML = `
      <div class="card border-0 bg-transparent position-relative">
        <div class="card-body">
          <div>
                      <div class="imgh ${cover.length > 1 ? "has-multiple" : ""}">
              ${cover
                .map(
                  (image) => `
                    <div class="nimg mb1">
                      <img src="${image}" class="shadow-sm rounded cover-image w-100" alt="Before Image">
                    </div>`
                )
                .join("")}
            </div>
         <h5 class="mb-2 ch3">Before</h5>
          </div>

          <div>
           
            <div class="imgh ${cover1.length > 1 ? "has-multiple" : ""}">
              ${cover1
                .map(
                  (image) => `
                    <div class="nimg mb1">
                      <img src="${image}" class="shadow-sm rounded cover-image w-100" alt="After Image">
                    </div>`
                )
                .join("")}
            </div>
             <h5 class="mt-3 mb-2 ch3">After</h5>
          </div>
        </div>
      </div>
    `;

    cardsContainer.appendChild(cardElement);

    setTimeout(() => {
      cardElement.classList.add("show");
    }, index * 100);
  });

  const carouselItems = document.querySelectorAll(".has-multiple");
  carouselItems.forEach(initializeCarousel);
};



const renderCategories = (cards) => {
  const categoriesContainer = document.getElementById("categories");
  const allCategories = new Set();

  // Collect all unique tags
  cards.forEach((card) => {
    card.tags.forEach((tag) => allCategories.add(tag));
  });

  // Convert Set to Array and sort categories
  const sortedCategories = ["all", ...Array.from(allCategories).sort()];

  // Generate category links
  categoriesContainer.innerHTML = sortedCategories
    .map((category) => `<li><a href="#" class="badge ${category === "all" ? "active" : ""}"><span>${category.charAt(0).toUpperCase() + category.slice(1)}</span></a></li>`)
    .join("");
};

const initializeCarousel = (carouselItem) => {
  const images = carouselItem.querySelectorAll("img");
  let currentIndex = 0;

  const prevButton = document.createElement("button");
  prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(carouselItem, images, currentIndex);
  });

  const nextButton = document.createElement("button");
  nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
  nextButton.classList.add("bubble", "end-0");
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel(carouselItem, images, currentIndex);
  });

  carouselItem.appendChild(prevButton);
  carouselItem.appendChild(nextButton);

  const updateCarousel = (carouselItem, images, currentIndex) => {
    images.forEach((image, index) => {
      image.style.transform = `translateX(${index - currentIndex}00%)`;
    });
  };
};

const searchCards = (cards, searchTerm) => {
  return cards.filter((card) => {
    return (
      (card.before && card.before.toLowerCase().includes(searchTerm)) ||
      (card.after && card.after.toLowerCase().includes(searchTerm)) ||
      card.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  });
};


const filterCardsByCategory = (cards, category) => cards.filter((card) => card.tags.includes(category));

const handleSearch = (event) => {
  const searchTerm = event.target.value.toLowerCase().trim();
  const selectedCategory = document
    .querySelector(".categories .active")
    .textContent.toLowerCase()
    .trim();

  let filteredCards =
    selectedCategory !== "all"
      ? filterCardsByCategory(data.cards, selectedCategory)
      : data.cards;

  filteredCards = searchCards(filteredCards, searchTerm);

  renderCards(cardsContainer, filteredCards);
};

const handleCategoryClick = (event) => {
  event.preventDefault();

  const target = event.target.closest("a");
  if (!target) return;

  const category = target.textContent.toLowerCase().trim();

  const categoryLinks = document.querySelectorAll("#categories a");
  categoryLinks.forEach((link) => link.classList.remove("active"));
  target.classList.add("active");

  let filteredCards =
    category === "all"
      ? data.cards
      : filterCardsByCategory(data.cards, category);

  const searchTerm = document.querySelector('input[type="search"]').value.toLowerCase().trim();
  filteredCards = searchCards(filteredCards, searchTerm);

  renderCards(cardsContainer, filteredCards);
};
*/


const data = {
  cards: [
    {
      
      tags: ["male chest surgery"],
      cover: ["images/male-chest-before-1.webp"],
      cover1: ["images/male-chest-after-1.webp"]
    },
    {
      
      tags: ["male chest surgery"],
      cover: ["images/male-chest-before-2.webp"],
      cover1: ["images/male-chest-after-2.webp"]
    },
    {
      
      tags: ["breast surgeries"],
      cover: ["images/breast-surgery-before.webp"],
      cover1: ["images/breast-surgery-after.webp"]
    },
    {
      
      tags: ["breast surgeries"],
      cover: ["images/breast-implant-before-1.webp"],
      cover1: ["images/breast-implant-after-1.webp"]
    },
    {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/1before03.webp"],
      cover1: ["images/gallery/tummy-tuck/1after03.webp"]
    },
    /*{
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/2before03.webp"],
      cover1: ["images/gallery/tummy-tuck/2after03.webp"]
    },*/
    {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/3before03.webp"],
      cover1: ["images/gallery/tummy-tuck/3after03.webp"]
    },
    {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before1.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after1.webp"]
    },
     {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before2.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after2.webp"]
    },
     {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before3.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after3.webp"]
    },
     {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before4.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after4.webp"]
    },
     {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before5.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after5.webp"]
    },
     {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before6.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after6.webp"]
    },
     {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before7.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after7.webp"]
    },
     {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before8.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after8.webp"]
    },
     {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before9.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after9.webp"]
    },
     {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before10.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after10.webp"]
    },
     {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before11.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after11.webp"]
    },
     {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before12.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after12.webp"]
    },
    {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before13.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after13.webp"]
    },
    {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before14.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after14.webp"]
    },
    {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before15.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after15.webp"]
    },
    {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before16.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after16.webp"]
    },
    {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before17.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after17.webp"]
    },
    {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before18.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after18.webp"]
    },
    {
      
      tags: ["tummy tuck"],
      cover: ["images/gallery/tummy-tuck/tummy-tuck-before19.webp"],
      cover1: ["images/gallery/tummy-tuck/tummy-tuck-after19.webp"]
    },
    {
      
      tags: ["face plastic surgery"],
      cover: ["images/gallery/face/face-before03.webp"],
      cover1: ["images/gallery/face/face-after03.webp"]
    },
    

    {
      
      tags: ["face plastic surgery"],
      cover: ["images/face-plastic-surgery-before.webp"],
      cover1: ["images/face-plastic-surgery-after.webp"]
    },
    {
      
      tags: ["face plastic surgery"],
      cover: ["images/face-1-before.webp"],
      cover1: ["images/face-1-after.webp"]
    },
    {
      
      tags: ["face plastic surgery"],
      cover: ["images/face-2-before.webp"],
      cover1: ["images/face-2-after.webp"]
    },
    {
      
      tags: ["face plastic surgery"],
      cover: ["images/face-3-before.webp"],
      cover1: ["images/face-3-after.webp"]
    },
    {
      
      tags: ["face plastic surgery"],
      cover: ["images/face-4-before.webp"],
      cover1: ["images/face-4-after.webp"]
    },
    {
      
      tags: ["face plastic surgery"],
      cover: ["images/face-5-before.webp"],
      cover1: ["images/face-5-after.webp"]
    },
    {
      
      tags: ["face plastic surgery"],
      cover: ["images/face-6-before.webp"],
      cover1: ["images/face-6-after.webp"]
    },
    {
      
      tags: ["face plastic surgery"],
      cover: ["images/gallery/face/face-2before03.webp"],
      cover1: ["images/gallery/face/face-2after03.webp"]
    },
    {
      
      tags: ["hair transplant"],
      cover: ["images/hair-transplant-before.webp"],
      cover1: ["images/hair-transplant-after.webp"]
    },
    {
      
      tags: ["alar reduction - rhinoplasty"],
      cover: ["images/gallery/rhino-plasty/rhino-before031.webp"],
      cover1: ["images/gallery/rhino-plasty/rihno-after031.webp"]
    },
    {
      
      tags: ["alar reduction - rhinoplasty"],
      cover: ["images/gallery/rhino-plasty/rihno-before032.webp"],
      cover1: ["images/gallery/rhino-plasty/rihno-after032.webp"]
    },
    {
      
      tags: ["alar reduction - rhinoplasty"],
      cover: ["images/gallery/rhino-plasty/tip-reduction-before.webp"],
      cover1: ["images/gallery/rhino-plasty/tip-reduction-after.webp"]
    },
    {
      
      tags: ["alar reduction - rhinoplasty"],
      cover: ["images/gallery/rhino-plasty/hump-tip-before1.webp"],
      cover1: ["images/gallery/rhino-plasty/hump-tip-after1.webp"]
    },
    {
      
      tags: ["alar reduction - rhinoplasty"],
      cover: ["images/gallery/rhino-plasty/hump-tip-before2.webp"],
      cover1: ["images/gallery/rhino-plasty/hump-tip-after2.webp"]
    },
    {
      
      tags: ["alar reduction - rhinoplasty"],
      cover: ["images/gallery/rhino-plasty/hump-reduction-3-before1.webp"],
      cover1: ["images/gallery/rhino-plasty/hump-reduction-3-after1.webp"]
    },
    {
      
      tags: ["alar reduction - rhinoplasty"],
      cover: ["images/gallery/rhino-plasty/hump-reduction-2-before1.webp"],
      cover1: ["images/gallery/rhino-plasty/hump-reduction-2-after1.webp"]
    },
    {
      
      tags: ["alar reduction - rhinoplasty"],
      cover: ["images/gallery/rhino-plasty/hump-reduction-3-before1.webp"],
      cover1: ["images/gallery/rhino-plasty/hump-reduction-3-after1.webp"]
    },
    {
      
      tags: ["alar reduction - rhinoplasty"],
      cover: ["images/gallery/rhino-plasty/hump-reduction-1.1-before.webp"],
      cover1: ["images/gallery/rhino-plasty/hump-reduction-1.1-after.webp"]
    },
    {
      
      tags: ["alar reduction - rhinoplasty"],
      cover: ["images/gallery/rhino-plasty/hump-red-4-before.webp"],
      cover1: ["images/gallery/rhino-plasty/hump-red-4-after.webp"]
    },
    {
      
      tags: ["saddle bag"],
      cover: ["images/gallery/saddle-before03.webp"],
      cover1: ["images/gallery/saddle-after03.webp"]
    },
    {
      
      tags: ["saddle bag"],
      cover: ["images/saddle-bag-before.webp"],
      cover1: ["images/saddle-bag-after.webp"]
    },
    {
      
      tags: ["saddle bag"],
      cover: ["images/gallery/saddle-before-1.webp"],
      cover1: ["images/gallery/saddle-after-1.webp"]
    },
    {
      
      tags: ["saddle bag"],
      cover: ["images/gallery/saddle-before-2.webp"],
      cover1: ["images/gallery/saddle-after-2.webp"]
    },
    {
      
      tags: ["saddle bag"],
      cover: ["images/gallery/saddle-before-3.webp"],
      cover1: ["images/gallery/saddle-after-3.webp"]
    },
    {
      
      tags: ["hip liposuction"],
      cover: ["images/hip-liposuction-before.webp"],
      cover1: ["images/hip-liposuction-after.webp"]
    },
    {
      
      tags: ["hip liposuction"],
      cover: ["images/gallery/hip-before-1.webp"],
      cover1: ["images/gallery/hip-after-1.webp"]
    },
    
    {
      
      tags: ["hip liposuction"],
      cover: ["images/gallery/hip-before-3.webp"],
      cover1: ["images/gallery/hip-after-3.webp"]
    },
    {
      
      tags: ["hip liposuction"],
      cover: ["images/gallery/hip-before-4.webp"],
      cover1: ["images/gallery/hip-after-4.webp"]
    },
    {
      
      tags: ["thigh liposuction"],
      cover: ["images/gallery/thigh-1before03.webp"],
      cover1: ["images/gallery/thigh-1after03.webp"]
    },
    {
      
      tags: ["thigh liposuction"],
      cover: ["images/gallery/thigh-before-1.webp"],
      cover1: ["images/gallery/thigh-after-1.webp"]
    },
    {
      
      tags: ["thigh liposuction"],
      cover: ["images/gallery/thigh-before-2.webp"],
      cover1: ["images/gallery/thigh-after-2.webp"]
    },
    {
      
      tags: ["thigh liposuction"],
      cover: ["images/gallery/thigh-before-3.webp"],
      cover1: ["images/gallery/thigh-after-3.webp"]
    },
    {
      
      tags: ["thigh liposuction"],
      cover: ["images/gallery/thigh-before-4.webp"],
      cover1: ["images/gallery/thigh-after-4.webp"]
    },
    {
      
      tags: ["fillers"],
      cover: ["images/fillers-before.webp"],
      cover1: ["images/fillers-after.webp"]
    },
    {
      
      tags: ["fillers"],
      cover: ["images/fillers-before-1.webp"],
      cover1: ["images/fillers-after-1.webp"]
    }, 
      {
      
      tags: ["liposuction"],
      cover: ["images/gallery/tummy-lipo/tummy-liposuction-before1.webp"],
      cover1: ["images/gallery/tummy-lipo/tummy-liposuction-after1.webp"]
    },
     {
      
      tags: ["liposuction"],
      cover: ["images/gallery/tummy-lipo/tummy-liposuction-before2.webp"],
      cover1: ["images/gallery/tummy-lipo/tummy-liposuction-after2.webp"]
    },
    {
      
      tags: ["liposuction"],
      cover: ["images/gallery/tummy-lipo/tummy-liposuction-before3.webp"],
      cover1: ["images/gallery/tummy-lipo/tummy-liposuction-after3.webp"]
    },
    {
      
      tags: ["liposuction"],
      cover: ["images/gallery/tummy-lipo/tummy-liposuction-before4.webp"],
      cover1: ["images/gallery/tummy-lipo/tummy-liposuction-after4.webp"]
    },
    {
      
      tags: ["liposuction"],
      cover: ["images/gallery/tummy-lipo/tummy-liposuction-before5.webp"],
      cover1: ["images/gallery/tummy-lipo/tummy-liposuction-after5.webp"]
    },
    
    {
      
      tags: ["liposuction"],
      cover: ["images/gallery/tummy-lipo/tummy-liposuction-before7.webp"],
      cover1: ["images/gallery/tummy-lipo/tummy-liposuction-after7.webp"]
    },
    {
      
      tags: ["liposuction"],
      cover: ["images/gallery/tummy-lipo/tummy-liposuction-before8.webp"],
      cover1: ["images/gallery/tummy-lipo/tummy-liposuction-after8.webp"]
    },
    {
      
      tags: ["liposuction"],
      cover: ["images/gallery/tummy-lipo/tummy-liposuction-before9.webp"],
      cover1: ["images/gallery/tummy-lipo/tummy-liposuction-after9.webp"]
    },
    {
      
      tags: ["liposuction"],
      cover: ["images/gallery/tummy-lipo/tummy-liposuction-before10.webp"],
      cover1: ["images/gallery/tummy-lipo/tummy-liposuction-after10.webp"]
    },
    {
      
      tags: ["liposuction"],
      cover: ["images/gallery/tummy-lipo/tummy-liposuction-before11.webp"],
      cover1: ["images/gallery/tummy-lipo/tummy-liposuction-after11.webp"]
    },
    {
      
      tags: ["liposuction"],
      cover: ["images/gallery/tummy-lipo/tummy-liposuctionbefore12.webp"],
      cover1: ["images/gallery/tummy-lipo/tummy-liposuctionafter12.webp"]
    },
    {
      
      tags: ["breast implant"],
      cover: ["images/gallery/breast-implant/before-front03.webp"],
      cover1: ["images/gallery/breast-implant/after-front03.webp"]
    },
    {
      
      tags: ["breast implant"],
      cover: ["images/gallery/breast-implant/before-side03.webp"],
      cover1: ["images/gallery/breast-implant/after-side03.webp"]
    },

    {
      
      tags: ["breast implant"],
      cover: ["images/breast-implant2-before.webp"],
      cover1: ["images/breast-implant2-after.webp"]
    },
    {
      
      tags: ["breast implant"],
      cover: ["images/breast-implant4-before.webp"],
      cover1: ["images/breast-implant4-after.webp"]
    },
    {
      
      tags: ["breast implant"],
      cover: ["images/breast-implant5-before.webp"],
      cover1: ["images/breast-implant5-after.webp"]
    },
    {
      
      tags: ["breast implant"],
      cover: ["images/breast-implant6-before.webp"],
      cover1: ["images/breast-implant6-after.webp"]
    },
    {
      
      tags: ["breast implant"],
      cover: ["images/breast-implant7-before.webp"],
      cover1: ["images/breast-implant7-after.webp"]
    },
     {
      
      tags: ["breast implant"],
      cover: ["images/breast-implant8-before.webp"],
      cover1: ["images/breast-implant8-after.webp"]
    },
     {
      
      tags: ["breast implant"],
      cover: ["images/breast-implant9-before.webp"],
      cover1: ["images/breast-implant9-after.webp"]
    },
     {
      
      tags: ["breast implant"],
      cover: ["images/breast-implant10-before.webp"],
      cover1: ["images/breast-implant10-after.webp"]
    },
    {
      
      tags: ["breast reduction"],
      cover: ["images/breast-reduction1-before.webp"],
      cover1: ["images/breast-reduction1-after.webp"]
    },
    {
      
      tags: ["breast reduction"],
      cover: ["images/breast-reduction2-before.webp"],
      cover1: ["images/breast-reduction2-after.webp"]
    },
    {
      
      tags: ["breast reduction"],
      cover: ["images/breast-reduction3-before.webp"],
      cover1: ["images/breast-reduction3-after.webp"]
    },
    {
      
      tags: ["breast reduction"],
      cover: ["images/breast-reduction4-before.webp"],
      cover1: ["images/breast-reduction4-after.webp"]
    },
    {
      
      tags: ["breast reduction"],
      cover: ["images/breast-reduction5-before.webp"],
      cover1: ["images/breast-reduction5-after.webp"]
    },
    {
      
      tags: ["breast reduction"],
      cover: ["images/gallery/breast-reduction5-before.webp"],
      cover1: ["images/gallery/breast-reduction5-after.webp"]
    },
    {
      
      tags: ["breast reduction"],
      cover: ["images/gallery/breast-reduction6-before.webp"],
      cover1: ["images/gallery/breast-reduction6-after.webp"]
    },
    {
      
      tags: ["breast reduction"],
      cover: ["images/gallery/breast-reduction7-before.webp"],
      cover1: ["images/gallery/breast-reduction7-after.webp"]
    },
    {
      
      tags: ["breast reduction"],
      cover: ["images/gallery/breast-reduction8-before.webp"],
      cover1: ["images/gallery/breast-reduction8-after.webp"]
    },
    {
      
      tags: ["male chest surgery"],
      cover: ["images/gynec-1-before.webp"],
      cover1: ["images/gynec-1-after.webp"]
    },
    {
      
      tags: ["male chest surgery"],
      cover: ["images/gynec-2-before.webp"],
      cover1: ["images/gynec-2-after.webp"]
    },
    {
      
      tags: ["male chest surgery"],
      cover: ["images/gynec-3-before.webp"],
      cover1: ["images/gynec-3-after.webp"]
    },
    {
      
      tags: ["male chest surgery"],
      cover: ["images/gynec-4-before.webp"],
      cover1: ["images/gynec-4-after.webp"]
    },
    {
      
      tags: ["male chest surgery"],
      cover: ["images/gynec-5-before.webp"],
      cover1: ["images/gynec-5-after.webp"]
    },
    {
      
      tags: ["male chest surgery"],
      cover: ["images/gynec-6-before.webp"],
      cover1: ["images/gynec-6-after.webp"]
    },
    {
      
      tags: ["arm reduction"],
      cover: ["images/gallery/arm/beforefront-arm03.webp"],
      cover1: ["images/gallery/arm/afterfront-arm03.webp"]
    },
    {
      
      tags: ["arm reduction"],
      cover: ["images/gallery/arm/beforeback-arm03.webp"],
      cover1: ["images/gallery/arm/afterback-arm03.webp"]
    },


    {
      
      tags: ["arm reduction"],
      cover: ["images/gallery/arms-before-1.webp"],
      cover1: ["images/gallery/arms-after-1.webp"]
    },
    /*{
      
      tags: ["arm reduction"],
      cover: ["images/gallery/arms-before-2.webp"],
      cover1: ["images/gallery/arms-after-2.webp"]
    },*/
    {
      
      tags: ["arm reduction"],
      cover: ["images/gallery/arms-before-3.webp"],
      cover1: ["images/gallery/arms-after-3.webp"]
    },
    {
      
      tags: ["arm reduction"],
      cover: ["images/gallery/arms-before-4.webp"],
      cover1: ["images/gallery/arms-after-4.webp"]
    },
    {
      
      tags: ["arm reduction"],
      cover: ["images/gallery/arms-before-5.webp"],
      cover1: ["images/gallery/arms-after-5.webp"]
    },
    {
      
      tags: ["arm reduction"],
      cover: ["images/gallery/arms-before-6.webp"],
      cover1: ["images/gallery/arms-after-6.webp"]
    },
    {
      
      tags: ["arm reduction"],
      cover: ["images/gallery/arms-before-7.webp"],
      cover1: ["images/gallery/arms-after-7.webp"]
    },
    {
      
      tags: ["arm reduction"],
      cover: ["images/gallery/arms-before-8.webp"],
      cover1: ["images/gallery/arms-after-8.webp"]
    },
     {
      
      tags: ["double chin reduction"],
      cover: ["images/gallery/double-chin-before1.webp"],
      cover1: ["images/gallery/double-chin-after1.webp"]
    },
     {
      
      tags: ["double chin reduction"],
      cover: ["images/gallery/double-chin-before2.webp"],
      cover1: ["images/gallery/double-chin-after2.webp"]
    },

    {
      
      tags: ["gynaecomastia grade1"],
      cover: ["images/gallery/grade-1/gynec-before1.png"],
      cover1: ["images/gallery/grade-1/gynec-after1.png"]
    },
    {
      
      tags: ["gynaecomastia grade1"],
      cover: ["images/gallery/grade-1/gynec-before2.png"],
      cover1: ["images/gallery/grade-1/gynec-after2.png"]
    },
    {
      
      tags: ["gynaecomastia grade1"],
      cover: ["images/gallery/grade-1/gynec-before3.png"],
      cover1: ["images/gallery/grade-1/gynec-after3.png"]
    },
    {
      
      tags: ["gynaecomastia grade1"],
      cover: ["images/gallery/grade-1/gynec-before4.png"],
      cover1: ["images/gallery/grade-1/gynec-after4.png"]
    },

    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/grade2-before031.webp"],
      cover1: ["images/gallery/grade-2/grade2-after031.webp"]
    },
    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/grade2-before032.webp"],
      cover1: ["images/gallery/grade-2/grade2-after032.webp"]
    },
    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/grade2-before033.webp"],
      cover1: ["images/gallery/grade-2/grade2-after033.webp"]
    },





    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before7.webp"],
      cover1: ["images/gallery/grade-2/gynec-after7.webp"]
    },
    /*{
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before8.webp"],
      cover1: ["images/gallery/grade-2/gynec-after8.webp"]
    },*/
    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before9.webp"],
      cover1: ["images/gallery/grade-2/gynec-after9.webp"]
    },
   /* {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before10.webp"],
      cover1: ["images/gallery/grade-2/gynec-after10.webp"]
    },*/
    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before11.webp"],
      cover1: ["images/gallery/grade-2/gynec-after11.webp"]
    },
    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before13.webp"],
      cover1: ["images/gallery/grade-2/gynec-after13.webp"]
    },
    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before14.webp"],
      cover1: ["images/gallery/grade-2/gynec-after14.webp"]
    },
    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before15.webp"],
      cover1: ["images/gallery/grade-2/gynec-after15.webp"]
    },
    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before16.webp"],
      cover1: ["images/gallery/grade-2/gynec-after16.webp"]
    },
    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before17.webp"],
      cover1: ["images/gallery/grade-2/gynec-after17.webp"]
    },
    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before18.webp"],
      cover1: ["images/gallery/grade-2/gynec-after18.webp"]
    },
    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before19.webp"],
      cover1: ["images/gallery/grade-2/gynec-after19.webp"]
    },
    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before20.webp"],
      cover1: ["images/gallery/grade-2/gynec-after20.webp"]
    },
    {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before21.webp"],
      cover1: ["images/gallery/grade-2/gynec-after21.webp"]
    },
     {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before22.webp"],
      cover1: ["images/gallery/grade-2/gynec-after22.webp"]
    },
     {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before23.webp"],
      cover1: ["images/gallery/grade-2/gynec-after23.webp"]
    },
     {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before24.webp"],
      cover1: ["images/gallery/grade-2/gynec-after24.webp"]
    },
     {
      
      tags: ["gynaecomastia grade2"],
      cover: ["images/gallery/grade-2/gynec-before25.webp"],
      cover1: ["images/gallery/grade-2/gynec-after25.webp"]
    },
     {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/grade3-before031.webp"],
      cover1: ["images/gallery/grade-3/grade3-after031.webp"]
    },
     {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/grade3-before032.webp"],
      cover1: ["images/gallery/grade-3/grade3-after032.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before1.webp"],
      cover1: ["images/gallery/grade-3/gynec-after1.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before2.webp"],
      cover1: ["images/gallery/grade-3/gynec-after2.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before3.webp"],
      cover1: ["images/gallery/grade-3/gynec-after3.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before4.webp"],
      cover1: ["images/gallery/grade-3/gynec-after4.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before5.webp"],
      cover1: ["images/gallery/grade-3/gynec-after5.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before6.webp"],
      cover1: ["images/gallery/grade-3/gynec-after6.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before7.webp"],
      cover1: ["images/gallery/grade-3/gynec-after7.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before8.webp"],
      cover1: ["images/gallery/grade-3/gynec-after8.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before9.webp"],
      cover1: ["images/gallery/grade-3/gynec-after9.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before10.webp"],
      cover1: ["images/gallery/grade-3/gynec-after10.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before14.webp"],
      cover1: ["images/gallery/grade-3/gynec-after14.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before15.webp"],
      cover1: ["images/gallery/grade-3/gynec-after15.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before16.webp"],
      cover1: ["images/gallery/grade-3/gynec-after16.webp"]
    },
    {
      
      tags: ["gynaecomastia grade3"],
      cover: ["images/gallery/grade-3/gynec-before17.webp"],
      cover1: ["images/gallery/grade-3/gynec-after17.webp"]
    },
    {
      
      tags: ["chin augmentation"],
      cover: ["images/gallery/chin-implant-before1.webp"],
      cover1: ["images/gallery/chin-implant-after2.webp"]
    },
    {
      
      tags: ["chin augmentation"],
      cover: ["images/gallery/chin-implant-before2.webp"],
      cover1: ["images/gallery/chin-implant-after1.webp"]
    }


    // Add more cards...
  ]
};



const cardsContainer = document.getElementById("cards-container");
const searchInput = document.querySelector('input[type="search"]');

renderCards(cardsContainer, data.cards);
renderCategories(data.cards);

searchInput.addEventListener("input", handleSearch);

const categoriesContainer = document.querySelector("#categories");
categoriesContainer.addEventListener("click", handleCategoryClick);
