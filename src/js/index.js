const mainPage = document.querySelector('.main-page')
const aboutPage = document.querySelector('.about-page')
const locationPage = document.querySelector('.location-page')
const careersPage = document.querySelector('.careers-page')

const aboutLabel = document.querySelectorAll('.about-label')
const locationLabel = document.querySelectorAll('.location-label')
const careersLabel = document.querySelectorAll('.careers-label')

const aboutInput = document.querySelector('#about')
const locationInput = document.querySelector('#location')
const careersInput = document.querySelector('#careers')

aboutInput.addEventListener('click', function (){
    if (aboutInput.checked) {
        mainPage.classList.remove('selecionado')
        aboutPage.classList.add('selecionado')
        locationPage.classList.remove('selecionado')
        careersPage.classList.remove('selecionado')
        for (let i = 0; i < aboutLabel.length; i++) {
            aboutLabel[i].style.color = 'var(--color-yellow)'
            locationLabel[i].style.color = 'var(--color-dim-grey)'
            careersLabel[i].style.color = 'var(--color-dim-grey)'
        }
    }
})

locationInput.addEventListener('click', function (){
    if (locationInput.checked) {
        mainPage.classList.remove('selecionado')
        aboutPage.classList.remove('selecionado')
        locationPage.classList.add('selecionado')
        careersPage.classList.remove('selecionado')
        for (let i = 0; i < locationLabel.length; i++) {
            aboutLabel[i].style.color = 'var(--color-dim-grey)'
            locationLabel[i].style.color = 'var(--color-yellow)'
            careersLabel[i].style.color = 'var(--color-dim-grey)'
        }
    }
})

careersInput.addEventListener('click', function (){
    if (careersInput.checked) {
        mainPage.classList.remove('selecionado')
        aboutPage.classList.remove('selecionado')
        locationPage.classList.remove('selecionado')
        careersPage.classList.add('selecionado')
        for (let i = 0; i < careersLabel.length; i++) {
            aboutLabel[i].style.color = 'var(--color-dim-grey)'
            locationLabel[i].style.color = 'var(--color-dim-grey)'
            careersLabel[i].style.color = 'var(--color-yellow)'
        }
    }
})


const aboutFooter = document.querySelector('#about-footer')
const locationFooter = document.querySelector('#location-footer')
const careersFooter = document.querySelector('#careers-footer')

aboutFooter.addEventListener('click', function (){
    if (aboutFooter.checked) {
        mainPage.classList.remove('selecionado')
        aboutPage.classList.add('selecionado')
        locationPage.classList.remove('selecionado')
        careersPage.classList.remove('selecionado')
        for (let i = 0; i < aboutLabel.length; i++) {
            aboutLabel[i].style.color = 'var(--color-yellow)'
            locationLabel[i].style.color = 'var(--color-dim-grey)'
            careersLabel[i].style.color = 'var(--color-dim-grey)'
        }
    }
})

locationFooter.addEventListener('click', function (){
    if (locationFooter.checked) {
        mainPage.classList.remove('selecionado')
        aboutPage.classList.remove('selecionado')
        locationPage.classList.add('selecionado')
        careersPage.classList.remove('selecionado')
        for (let i = 0; i < locationLabel.length; i++) {
            aboutLabel[i].style.color = 'var(--color-dim-grey)'
            locationLabel[i].style.color = 'var(--color-yellow)'
            careersLabel[i].style.color = 'var(--color-dim-grey)'
        }
    }
})

careersFooter.addEventListener('click', function (){
    if (careersFooter.checked) {
        mainPage.classList.remove('selecionado')
        aboutPage.classList.remove('selecionado')
        locationPage.classList.remove('selecionado')
        careersPage.classList.add('selecionado')
        for (let i = 0; i < careersLabel.length; i++) {
            aboutLabel[i].style.color = 'var(--color-dim-grey)'
            locationLabel[i].style.color = 'var(--color-dim-grey)'
            careersLabel[i].style.color = 'var(--color-yellow)'
        }
    }
})

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
