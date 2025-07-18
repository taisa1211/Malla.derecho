// Cuando se hace clic en un ramo, muestra su info
document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    const info = ramo.getAttribute('data-info');
    const infoBox = document.getElementById('info-box');
    infoBox.innerText = info;
    infoBox.style.display = 'block';
  });
});
