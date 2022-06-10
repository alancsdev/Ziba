//JS DA LÓGICA DO SLIDER + CAROUSEL DAS FOTOS

//*********************************************************************** */

var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('demo');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' w3-white', '');
  }
  x[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' w3-white';
}

// var slideIndex = 0;
carousel();

function carousel() {
  var dots = document.getElementsByClassName('demo');
  var i;
  var x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = 'block';

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' w3-white', '');
  }
  dots[slideIndex - 1].className += ' w3-white';

  setTimeout(carousel, 4000); // Change image every 3 seconds
}

//JS DO MODAL DE COMODIDADES!
//*********************************************************************** */

// Get the modal
var modalComodidades = document.getElementById('modalComodidades');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('closeComodidades')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modalComodidades.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalComodidades.style.display = 'none';
};

//JS DO MODAL DA GALERIA!
//*********************************************************************** */

// Get the modal
var modalGallery = document.getElementById('modalGallery');

// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg = document.getElementById('imgModal');
var images = [];

for (let i = 1; i <= 21; i++) {
  images[i] = document.getElementById(`gallery${i}`).onclick = function () {
    modalGallery.style.display = 'block';
    modalImg.src = this.src;
  };
}

// Get the <span> element that closes the modal
var spanGallery = document.getElementsByClassName('closeGallery')[0];

// When the user clicks on <span> (x), close the modal
spanGallery.onclick = function () {
  modalGallery.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalComodidades || event.target == modalGallery) {
    modalComodidades.style.display = 'none';
    modalGallery.style.display = 'none';
  }
};

// NAVBAR MOBILE
var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

mobileNav.addEventListener('click', function () {
  mobileNav.classList.remove('openMobileNav');
  closeModal();
});

backdrop.addEventListener('click', function () {
  //   mobileNav.style.display = "none";
  mobileNav.classList.remove('openMobileNav');
  closeModal();
});

toggleButton.addEventListener('click', function () {
  backdrop.style.display = 'block';
  setTimeout(function () {
    backdrop.classList.add('openMobileNav');
  }, 10);
  mobileNav.classList.add('openMobileNav');
});

function closeModal() {
  //   modal.style.display = "none";
  backdrop.classList.remove('openMobileNav');
  setTimeout(function () {
    backdrop.style.display = 'none';
  }, 200);
}

(function () {
  const resize = () => {
    let airbnb = document.getElementsByClassName('airbnb-frame-ziba');
    console.log('teste', airbnb);

    for (let airbnbaux of airbnb) {
      let scale = (window.innerWidth - 50) / airbnbaux.offsetWidth;
      airbnbaux.style.transform = 'scale(' + scale + ')';
    }
  };

  window.onload = () => resize();
  window.onresize = () => resize();
})();
