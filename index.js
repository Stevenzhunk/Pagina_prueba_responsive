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


