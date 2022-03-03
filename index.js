const navToogle =document.querySelector(".nav-toggle");
const navMenu =document.querySelector(".nav-menu");


navToogle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
   
    /*condicion para botton accesivilidad*/
    /*si tenemos la clase nav menu visible ponemos cerrar de lo contrario abrir menu */
    if(navMenu.classList.contains("nav-menu_visible")){
      navToggle.setAttribute("aria-label", "cerrar menu");
    }
    else {
        navToggle.setAttribute("aria-label", "Abrir Menú");
    }
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
