const nav = document.querySelector('.nav-main');

window.addEventListener('scroll', () => {
  if (window.scrollY > 2) {
    nav.classList.add('active');
    
  } else {
    nav.classList.remove('active');
    
  }
});


//

// window.addEventListener('scroll', function() {
//   const elementos = document.querySelectorAll('.animar');
//   const altura = window.innerHeight;
//   const punto = 250;

//   elementos.forEach(elemento => {
//     const distancia = elemento.getBoundingClientRect().top;
//     if (distancia < altura - punto) {
//       elemento.classList.add('visible');
//     }
//   });
// });


const scroll = document.querySelector('ativar');

window.addEventListener('scroll', () => {
  if( window.scrollY > 70) {
    scroll.classList.remove('animar0')
    scroll.classList.add('animar1');
  }
  else{
    scroll.classList.remove('animar1')
    scroll.classList.add('animar0');
  }
});

const scroll2 = document.querySelector('ativar2');

window.addEventListener('scroll', () => {
  if( window.scrollY > 600) {
    scroll2.classList.remove('animar0')
    scroll2.classList.add('animar1');
  }
  else{
    scroll2.classList.remove('animar1')
    scroll2.classList.add('animar0');
  }
});


