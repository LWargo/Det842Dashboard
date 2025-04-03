
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
});
    // Get references to the radio buttons and the buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    // Get all radio buttons (representing slides)
    const slides = document.querySelectorAll('input[name="carousel"]');
    
    let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
const carouselTrack = document.querySelector('.carousel-track');

const itemWidth = carouselItems[0].offsetWidth; // Get the width of a single item

function nextSlide() {
    if (currentIndex < totalItems - 2) {
        currentIndex++;
        carouselTrack.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        carouselTrack.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }
}


    function updateProgressBarColor(progressElement) {
        const value = progressElement.value;
        const max = progressElement.max;
        const percentage = (value / max) * 100;

        // Set the progress color based on the value
        if (percentage < 30) {
            progressElement.style.setProperty('--color', 'red');
        } else if (percentage < 60) {
            progressElement.style.setProperty('--color', 'orange');
        } else {
            progressElement.style.setProperty('--color', 'green');
        }
    }

    // Call the function for each progress bar on page load or on value change
    document.querySelectorAll('progress').forEach(progress => {
        updateProgressBarColor(progress); // Initially set color
        progress.addEventListener('input', () => updateProgressBarColor(progress)); // Update on user input
    });

const clubContainer = document.querySelector(".clubs");
const prevBtn = document.querySelector(".cl_prev");
const nextBtn = document.querySelector(".cl_next");
// Ensure the clubs container starts at the first club
document.addEventListener("DOMContentLoaded", () => {
    clubContainer.scrollLeft = 0; // Reset scroll position to Club 1
});

const scrollAmount = 350; // Adjust scroll distance per click

function scrollClubNext() {
    const maxScroll = clubContainer.scrollWidth - clubContainer.clientWidth;
    if (clubContainer.scrollLeft < maxScroll) {
        clubContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
}

function scrollClubPrev() {
    if (clubContainer.scrollLeft > -650) {
        clubContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
}
