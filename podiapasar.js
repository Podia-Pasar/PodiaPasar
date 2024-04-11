function inicio(){
  window.location.href = "index.html";
};

function billetes(){
  windows.location.href = "nuevos billetes.html";
};


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


const ultimasNoticias = document.querySelector('.ultimasNoticias');

window.addEventListener('scroll', () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 100) {
    ultimasNoticias.classList.remove('hidden');
  }
});