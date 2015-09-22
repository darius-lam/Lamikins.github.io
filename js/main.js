document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#1695A3',
    lineColor: '#1695A3',
    density: 10000,
    particleRadius: 5,
    curvedLines: true,
    parallaxMultiplier: 10
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);