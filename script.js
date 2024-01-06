
    document.addEventListener('DOMContentLoaded', function () {
        var menuButton = document.querySelector('.hamburger-menu');
        var nav = document.querySelector('.menu nav');

        menuButton.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
    });
