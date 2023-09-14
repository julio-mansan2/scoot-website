const mainPage = document.querySelector('.main-page');
const aboutPage = document.querySelector('.about-page');
const locationPage = document.querySelector('.location-page');
const careersPage = document.querySelector('.careers-page');

const aboutLabel = document.querySelectorAll('.about-label');
const locationLabel = document.querySelectorAll('.location-label');
const careersLabel = document.querySelectorAll('.careers-label');

const aboutInput = document.querySelector('#about');
const locationInput = document.querySelector('#location');
const careersInput = document.querySelector('#careers');

const aboutFooter = document.querySelector('#about-footer');
const locationFooter = document.querySelector('#location-footer');
const careersFooter = document.querySelector('#careers-footer');

function handlePageChange(selectedPage, selectedLabelColor, otherLabelColor) {
    mainPage.classList.remove('selecionado');
    aboutPage.classList.remove('selecionado');
    locationPage.classList.remove('selecionado');
    careersPage.classList.remove('selecionado');

    selectedPage.classList.add('selecionado');

    for (let i = 0; i < aboutLabel.length; i++) {
        aboutLabel[i].style.color = otherLabelColor;
        locationLabel[i].style.color = otherLabelColor;
        careersLabel[i].style.color = otherLabelColor;
    }

    selectedLabelColor.forEach((label, index) => {
        label.style.color = 'var(--color-yellow)';
    });
}

aboutInput.addEventListener('click', function () {
    if (aboutInput.checked) {
        handlePageChange(aboutPage, aboutLabel, 'var(--color-dim-grey)');
    }
});

locationInput.addEventListener('click', function () {
    if (locationInput.checked) {
        handlePageChange(locationPage, locationLabel, 'var(--color-dim-grey)');
    }
});

careersInput.addEventListener('click', function () {
    if (careersInput.checked) {
        handlePageChange(careersPage, careersLabel, 'var(--color-dim-grey)');
    }
});

aboutFooter.addEventListener('click', function () {
    if (aboutFooter.checked) {
        handlePageChange(aboutPage, aboutLabel, 'var(--color-dim-grey)');
    }
});

locationFooter.addEventListener('click', function () {
    if (locationFooter.checked) {
        handlePageChange(locationPage, locationLabel, 'var(--color-dim-grey)');
    }
});

careersFooter.addEventListener('click', function () {
    if (careersFooter.checked) {
        handlePageChange(careersPage, careersLabel, 'var(--color-dim-grey)');
    }
});


const acc = document.querySelectorAll(".acordeon");
var i;

acc.forEach(acordeon => {
    acordeon.addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        acordeon.classList.remove('bg-active')
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        acordeon.classList.add('bg-active')
      } 
    });
}); 

const menuHamburguer = document.getElementById('menu__toggle')
const navMenu = document.querySelector('.menu__box')

menuHamburguer.addEventListener('click', function () {
    if (menuHamburguer.checked) {
        navMenu.classList.add('aparecer')
    } else {
        navMenu.classList.remove('aparecer')
        navMenu.classList.add('ocultar')
    }
})
