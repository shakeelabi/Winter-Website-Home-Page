let currentIndex = 0;
const slides = document.querySelectorAll('.gallery img');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function prevSlide() {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
}

// Autoplay feature
setInterval(() => {
  nextSlide();
}, 3000);
// Sample data for clothes
const clothes = [
    { name: 'T-Shirt', price: '$20', image: 'tshirt.jpg' },
    { name: 'Jeans', price: '$40', image: 'jeans.jpg' },
    { name: 'Dress', price: '$50', image: 'dress.jpg' }
];

// Function to display clothes
function displayClothes() {
    const clothesContainer = document.querySelector('.clothes-container');
    clothesContainer.innerHTML = '';

    clothes.forEach(cloth => {
        const clothesItem = document.createElement('div');
        clothesItem.classList.add('clothes-item');
        clothesItem.innerHTML = `
            <img src="images/${cloth.image}" alt="${cloth.name}">
            <h3>${cloth.name}</h3>
            <p>${cloth.price}</p>
        `;
        clothesContainer.appendChild(clothesItem);
    });
}

// Function to show collections when "Collections" link is clicked
function showCollections() {
    const clothesContainer = document.querySelector('.clothes-container');
    clothesContainer.style.display = 'flex';
    displayClothes();
}

