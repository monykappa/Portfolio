function createObserver(selector) {
    return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialize carousels
    var carousel1 = new bootstrap.Carousel(document.getElementById('projectSlideshow1'), {
        interval: 2000,
        wrap: true
    });
    var carousel2 = new bootstrap.Carousel(document.getElementById('projectSlideshow2'), {
        interval: 2000,
        wrap: true
    });

    // Full-screen functionality
    var clickableImages = document.querySelectorAll('.clickable-image');
    var fullscreenOverlay = document.getElementById('fullscreenOverlay');
    var fullscreenImage = document.getElementById('fullscreenImage');
    var closeFullscreen = document.getElementById('closeFullscreen');

    clickableImages.forEach(function(img) {
        img.addEventListener('click', function() {
            fullscreenImage.src = this.src;
            fullscreenOverlay.style.display = 'block';
        });
    });

    closeFullscreen.addEventListener('click', function() {
        fullscreenOverlay.style.display = 'none';
    });

    fullscreenOverlay.addEventListener('click', function(e) {
        if (e.target === fullscreenOverlay) {
            fullscreenOverlay.style.display = 'none';
        }
    });
});


const observeElements = (observer, selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));
};

const observerLeft = createObserver('.hidden-left');
observeElements(observerLeft, '.hidden-left');

const observerRight = createObserver('.hidden-right');
observeElements(observerRight, '.hidden-right');

const observerTop = createObserver('.hidden-top');
observeElements(observerTop, '.hidden-top');

const observerBottom = createObserver('.hidden-bottom');
observeElements(observerBottom, '.hidden-bottom');
