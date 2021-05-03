let previousScrollPosition = 0;

const isScrollingDown = () => {
    let currentScrolledPosition = window.scrollY || window.pageYOffset;
    let scrollingDown;

    if (currentScrolledPosition > previousScrollPosition) {
        scrollingDown = true;
    } else {
        scrollingDown = false;
    }
    previousScrollPosition = currentScrolledPosition;
    return scrollingDown;
};



const nav = document.querySelector('nav');

const handleNavScroll = () => {
    if (isScrollingDown() && !nav.contains(document.activeElement)) {
        nav.classList.add('scroll-down');
        nav.classList.remove('scroll-up')
    } else {
        nav.classList.add('scroll-up');
        nav.classList.remove('scroll-down')
    }
}




var throttleWait;

const throttle = (callback, time) => {
    if (throttleWait) return;

    throttleWait = true;

    setTimeout(() => {
        callback();

        throttleWait = false;
    }, time);
}

window.addEventListener("scroll", () => {
    throttle(handleNavScroll, 250)
});






const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("scroll", () => {
    if (mediaQuery && !mediaQuery.matches) {
        throttle(handleNavScroll, 250)
    }
});