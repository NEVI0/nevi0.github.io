// ADD BOX-SHADOW IN SCROLLING DOWN IN THE HEADER
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if (this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});