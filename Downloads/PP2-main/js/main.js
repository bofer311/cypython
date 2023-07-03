//Dos caminos
//funcion de envio de formulario
function enviarFormulario() {
    var formulario = document.getElementById("contactSection");
    var datos = new FormData(formulario);
    
    // Validación de formulario
    var xhr1 = new XMLHttpRequest();
    xhr1.open("POST", "/procesar");
    xhr1.send(datos);
  }  
//zoom de productos
var zoomBtnVisible = false;
function expandImage(element) {
    element.style.position = 'fixed';
    element.style.top = '0';
    element.style.left = '0';
    element.style.width = '100vw';
    element.style.height = '100vh';
    element.style.objectFit = 'contain';
    element.style.zIndex = '9999';
    
    document.getElementById('zoomBtn').style.display = 'block';
    document.getElementById('backBtn').style.display = 'block';
    zoomBtnVisible = true;
}

function shrinkImage() {
    var images = document.querySelectorAll('.zoom-image img');
    
    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        image.style.position = 'static';
        image.style.width = '100%';
        image.style.height = 'auto';
    }
    
    document.getElementById('zoomBtn').style.display = 'none';
    document.getElementById('backBtn').style.display = 'none';
    zoomBtnVisible = false;
}

window.onload = function() {
    if (!zoomBtnVisible) {
        document.getElementById('zoomBtn').style.display = 'none';
    }
};
//suavizado de transicion
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbarMain');
  var scrolled = window.scrollY > 0;
  navbar.classList.toggle('scrolled', scrolled);

  var footer = document.querySelector('footer');
  footer.classList.toggle('scrolled', scrolled);
});

document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.navItem');
  navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(event) {
          event.preventDefault();
          var target = document.querySelector(this.getAttribute('href'));
          smoothScroll(target);
      });
  });

  var footerLinks = document.querySelectorAll('footer .nav-link');
  footerLinks.forEach(function(footerLink) {
      footerLink.addEventListener('click', function(event) {
          event.preventDefault();
          var target = document.querySelector(this.getAttribute('href'));
          smoothScroll(target);
      });
  });

  function smoothScroll(target) {
      var scrollContainer = document.documentElement || document.body;
      var targetOffset = target.getBoundingClientRect().top + scrollContainer.scrollTop;
      var startPosition = scrollContainer.scrollTop;
      var distance = targetOffset - startPosition;
      var duration = 500;
      var startTime = null;

      function animation(currentTime) {
          if (startTime === null) {
              startTime = currentTime;
          }
          var timeElapsed = currentTime - startTime;
          var scrollPosition = ease(timeElapsed, startPosition, distance, duration);
          scrollContainer.scrollTop = scrollPosition;
          if (timeElapsed < duration) {
              requestAnimationFrame(animation);
          }
      }

      function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
  }
});