# Desafio Scoot Website - Frontend-Mentor

Este é um desafio de um website para a Scoot, proposto pelo site Frontend-Mentor.

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
    - [Imagens](#imagens)
    - [Link da página](#link)
- [Processo](#processo)
    - [Linguagens utilizadas](#linguagens-utilizadas)
    - [O que aprendi](#o-que-aprendi)
    - [Possíveis evoluções](#possíveis-evoluções)
- [Autor](#autor)

## Visão-geral

### Imagens

<br>

````
Versão de Desktop
````

   <img src="./src/design/desktop-design.gif" alt="desktop-design">

<br>

````
Versão Mobile

````

 <img src="./src/design/mobile-design.gif" alt="mobile-design">

<br>

````
Versão Tablet

````

 <img src="./src/design/tablet-design.gif" alt="mobile-design">

### Link

- Página no GitHub Pages: <a href="https://julio-mansan2.github.io/scoot-website/">Clique aqui!</a>

## Processo

### Linguagens utilizadas

<br>

- Marcações semânticas de HTML5
- Propriedades de customização do CSS3
- Estruturas de JavaScript

<br>

### O que aprendi

<br>

- Adicionar estilos a elementos com JavaScript:

````javascript

for (let i = 0; i < careersLabel.length; i++) {
    aboutLabel[i].style.color = 'var(--color-dim-grey)'
    locationLabel[i].style.color = 'var(--color-dim-grey)'
    careersLabel[i].style.color = 'var(--color-yellow)'
}

````

- Adicionar um menu no estilo acordeon:

````javascript

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

````
<br>

### Possíveis evoluções

<br>

- Códigos mais compactos;
- Otimizar o JS;

<br>

## Autor

GitHub - <a href="https://github.com/julio-mansan2">julio-mansan2</a> <br>
Front-end Mentor - <a href="https://www.frontendmentor.io/profile/julio-mansan2">julio-mansan2</a> <br>
LinkedIn - <a href="https://www.linkedin.com/in/j%C3%BAlio-a-mansan-3415a7249/">Júlio A.</a> <br>
