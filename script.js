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

    clickableImages.forEach(function (img) {
        img.addEventListener('click', function () {
            fullscreenImage.src = this.src;
            fullscreenOverlay.style.display = 'block';
        });
    });

    closeFullscreen.addEventListener('click', function () {
        fullscreenOverlay.style.display = 'none';
    });

    fullscreenOverlay.addEventListener('click', function (e) {
        if (e.target === fullscreenOverlay) {
            fullscreenOverlay.style.display = 'none';
        }
    });
});


// Matrix animation
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

var fontSize = 10,
    columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
        }
    }
}

setInterval(draw, 33);

// Typewriter effect
var aText = new Array(
    "Hi my name is ",
    "Kim Ouddommony"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout(typewriter, 500);
        }
    } else {
        setTimeout(typewriter, iSpeed);
    }
}

typewriter();

// Resize canvas on window resize
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
    drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }
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
