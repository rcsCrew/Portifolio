const nav = document.querySelector('.nav-main');

window.addEventListener('scroll', () => {
  if (window.scrollY > 2) {
    nav.classList.add('active');
    
  } else {
    nav.classList.remove('active');
    
  }
});


//

window.addEventListener('scroll', function() {
  const elementos = document.querySelectorAll('.animar');
  const altura = window.innerHeight;
  const punto = 250;

  elementos.forEach(elemento => {
    const distancia = elemento.getBoundingClientRect().top;
    if (distancia < altura - punto) {
      elemento.classList.add('visible');
    }
  });
});
