window.addEventListener('scroll', function() {
    var element = document.querySelector('.fade-in');
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    if (position < windowHeight) {
      element.classList.add('active');
    }
  });
  