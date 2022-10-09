const toggle = document.getElementById('toggle');

// Toggle
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 9.078840, lng: 7.473420 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 14,
      center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#navbar').style.opacity = 0.9;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  });
  
  
// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

(function($) {
  "use strict";
  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });
})(jQuery);

const loading = document.getElementById('loading');
setTimeout(() => {
  loading.remove();
  loading.style.display = 'flex';

}, 1000);