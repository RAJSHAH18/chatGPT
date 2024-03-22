document.addEventListener('DOMContentLoaded', function() {
    var html = '';
    for (var i = 1; i <= 50; i++) {
      html += '<div class="shape-container--' + i + ' shape-animation"><div class="random-shape"></div></div>';
    }
  
    document.querySelector('.shape').innerHTML += html;
  
    var allShapes = document.querySelectorAll('[class*="shape-container--"]');
  });
  