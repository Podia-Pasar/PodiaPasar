var menuNav = document.querySelector(".hotMenu");
var barras = document.getElementById("hotMenuA");
var cerrar = document.getElementById("hotMenuC");

function hotMenuA() {
    barras.style.display = "none";
    cerrar.style.display = "block";
    menuNav.classList.toggle("active");
}
function hotMenuC() {
    barras.style.display = "block";
    cerrar.style.display = "none";
    menuNav.classList.toggle("active");
}