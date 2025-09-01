let carouselManager = () => {
    let slides = document.getElementsByClassName('slide');
    let circles = document.getElementsByClassName('circle');
    if (!document.querySelector('.focus')) {
        slides[0].classList.add('focus');
        circles[0].classList.add('focus');
    }

    let updateCircles = (focusSlide) => {
        for (let i = 0; i < circles.length; i ++) {
            if (circles[i].classList.contains('focus')) {
                circles[i].classList.remove('focus');
                break;
            }
        }
        circles[focusSlide].classList.add('focus');
    }

    let colorFocus = () => {
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('focus')) {
                slides[i].style.backgroundColor = 'lightgray';
            } else {
                slides[i].removeAttribute('style');
            }
        }
    }
    colorFocus();

    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', () => {
        for (let i = 0; i < slides.length; i++) {
            if (slides[0].classList.contains('focus')) {
               slides[0].classList.remove('focus');
               slides[(slides.length - 1)].classList.add('focus');
               colorFocus();
               updateCircles(slides.length - 1);
               break;
            }
            if (slides[i].classList.contains('focus') && (i != slides[0])) {
                slides[i].classList.remove('focus');
                
                slides[i].previousElementSibling.classList.add('focus');
                
                colorFocus();
                updateCircles(i - 1);
                document.querySelector('.focus').scrollIntoView({ behavior: "smooth" });
                break;
            }
        }
    })

    nextButton.addEventListener('click', () => {
        for (let i = 0; i < slides.length; i++) {
            if (slides[(slides.length - 1)].classList.contains('focus')) {
                slides[(slides.length - 1)].classList.remove('focus');
                slides[0].classList.add('focus');
                colorFocus();
                updateCircles(0);
                break;
            }
            if (slides[i].classList.contains('focus') && i < slides.length) {
                slides[i].classList.remove('focus');
                
                slides[i].nextElementSibling.classList.add('focus');
                
                colorFocus();
                updateCircles(i + 1);
                document.querySelector('.focus').scrollIntoView({ behavior: "smooth" });
                break;
            }
        }
    })
}

carouselManager();