document.addEventListener('DOMContentLoaded', function() {
  const names = ['Amad', 'Renas', 'Habib', 'Anjam', 'Aram Adil', 'Pala', 'Wjar', 'Redan', 'Aram abd', 'Gailan', 'Sahand', 'Hndren'];

  const matrixAnimation = document.getElementById('matrixAnimation');

  function createFlickeringText(text) {
    const flickeringText = document.createElement('div');
    flickeringText.classList.add('flickering-text');
    flickeringText.textContent = text;
    flickeringText.style.left = `${Math.random() * 100}vw`;
    flickeringText.style.top = `${Math.random() * 100}vh`;
    flickeringText.style.animationDuration = `${Math.random() * 2 + 1}s`; // Randomize animation duration
    matrixAnimation.appendChild(flickeringText);
  }

  // Repeat names to fill the screen
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const numberOfTexts = Math.ceil((screenWidth * screenHeight) / 50000);

  for (let i = 0; i < numberOfTexts; i++) {
    names.forEach(name => {
      createFlickeringText(name);
    });
  }
});
