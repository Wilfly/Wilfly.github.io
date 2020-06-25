//Barra de Navegación
 $(document).ready(function(){
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $('.fixed-action-btn').floatingActionButton({
        direction: 'bottom',
        hoverEnabled: false
      });
  });

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
    let desplazamiento = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamiento) {
        document.getElementById('navbar').style.top = '0px';
    } else {
        document.getElementById('navbar').style.top = '-100px';
    }
    ubicacionPrincipal = desplazamiento;
};

$(window).scroll(function() {
    var header = document.getElementById("header");
    
    if ($("#navbar").offset().top > header.clientHeight) {
        $("nav").addClass("fondon");
    } else {
        $("nav").removeClass("fondon");
    };
});