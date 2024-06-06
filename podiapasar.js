const hotMenuA = document.getElementById('hotMenuA');
const hotMenuC = document.getElementById('hotMenuC');
const hotMenu = document.getElementById('hotMenu');

hotMenuA.addEventListener('click', () => {
  hotMenu.style.left = '10%';
  hotMenuA.style.display = "none"
  hotMenuC.style.display = "block"
});

hotMenuC.addEventListener('click', () => {
  hotMenu.style.left = '-50%';
  hotMenuA.style.display = "block"
  hotMenuC.style.display = "none"
});

function secciones() {
  window.location.href = "secciones.html";
}
function inicio() {
  window.location.href = "podiapasar.html";
}