// ADD BOX-SHADOW IN SCROLLING DOWN IN THE HEADER
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if (this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});

// SCROLL TO
const scrollUp = document.getElementById('scroll-up');
scrollUp.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
});

// SHOW SCROLL TO TOP BUTTON
window.addEventListener('scroll', () => {
    if (this.scrollY <= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
});
