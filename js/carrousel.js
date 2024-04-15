var currentIndex = 0;
var images = document.querySelectorAll('.carousel img');
var intervalId;

function showImage(index) {
    currentIndex = index;
    var offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = 'translateX(' + offset + '%)';
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

function startCarousel() {
    intervalId = setInterval(nextImage, 5000);
}

showImage(currentIndex);
startCarousel();

document.querySelector('.prev').addEventListener('click', prevImage);
document.querySelector('.next').addEventListener('click', nextImage);