document.addEventListener('DOMContentLoaded', function() {
  // Use Anime.js for the animations
  anime({
    targets: '#championName',
    textShadow: '0 0 10px #fff, 0 0 20px #ffcc00, 0 0 30px #ffcc00',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '#winnerText, #championName',
    translateY: [-20, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1500
  });

  anime({
    targets: 'body',
    backgroundColor: '#000',
    easing: 'easeInOutQuad',
    duration: 2000
  });
});
