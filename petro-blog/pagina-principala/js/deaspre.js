const slidersLeft = document.querySelectorAll('.left');
const slidersRight = document.querySelectorAll('.right');

// Intersection Observer for left sliders

const observerLeft = new IntersectionObserver((entries, observerLeft) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('slideLeft');
            observerLeft.unobserve(entry.target);
        }
    })
})

slidersLeft.forEach(sliderLeft => {
    observerLeft.observe(sliderLeft);
})
// ==============================


// Intersection Observer for right sliders

const observerRight = new IntersectionObserver((entries, observerRight) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('slideRight');
            observerRight.unobserve(entry.target);
        }
    })
});

slidersRight.forEach(sliderRight => {
    observerRight.observe(sliderRight);
})

// ==============================