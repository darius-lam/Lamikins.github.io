document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#1695A3',
    lineColor: '#1695A3',
    density: 9000,
    particleRadius: 5,
    curvedLines: true
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);