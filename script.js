window.addEventListener('scroll', function() {
    var menu = document.getElementById('m');
    var scrollTop = window.scrollY;

    if (scrollTop > 0) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});