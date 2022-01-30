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

// CHANGE THEME
const themeButton = document.getElementById('change-theme');
themeButton.addEventListener('click', () => {

    const themeIcon = document.getElementById('change-theme-icon');
    const currentTheme = localStorage.getItem('@PORTFOLIO:theme');

    if (currentTheme === 'dark-theme') {
        document.body.classList.replace('dark-theme', 'light-theme');
        themeIcon.classList.replace('ri-sun-line', 'ri-moon-line');
        localStorage.setItem('@PORTFOLIO:theme', 'light-theme');
    } else {
        document.body.classList.replace('light-theme', 'dark-theme');
        themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
        localStorage.setItem('@PORTFOLIO:theme', 'dark-theme');
    }

});