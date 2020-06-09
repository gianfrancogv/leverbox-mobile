var comencemosBtn = document.getElementById("comencemosBtn");
var nombre = document.getElementById("nombre");

var mobile1 = document.getElementById("mobile-1")
var mobile2 = document.getElementById("mobile-2");
var mobile3 = document.getElementById("mobile-3");
var mobile4 = document.getElementById("mobile-4");

comencemosBtn.addEventListener('click', toggle1);

function toggle1() {
  mobile1.style.display = "none";
  mobile2.style.display = "flex";
}

function toggle2() {
  mobile2.style.display = "none";
  mobile3.style.display = "block";
}

function toggle3() {
  mobile3.style.display = "none";
  mobile4.style.display = "block";
}

function editarDatos() {
  var nombre2 = document.createElement("input");
  nombre.parentElement.replaceChild(nombre2, nombre);
  nombre2.setAttribute("class", "text");
}