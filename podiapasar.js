const hotMenuA = document.getElementById('hotMenuA');
const hotMenuC = document.getElementById('hotMenuC');
const hotMenu = document.getElementById('hotMenu');

hotMenuA.addEventListener('click', () => {
  hotMenu.style.left = 0;
  hotMenuA.style.display = "none"
  hotMenuC.style.display = "block"
});

hotMenuC.addEventListener('click', () => {
  hotMenu.style.left = '-150%';
  hotMenuA.style.display = "block"
  hotMenuC.style.display = "none"
});

function secciones() {
  window.location.href = "secciones.html";
}
function inicio() {
  window.location.href = "index.html";
}
function inicioSecciones() {
  window.location.href = "../index.html";
}
function seccionesSecciones() {
  window.location.href = "../secciones.html";
}