
 $( document ).ready(function() {

     //para asegurarse que al cargar la pagina en cualquier seccion se ejecute la funcion
     blacknavigator();
     
     //cuando se mueva el scroll para arriba o abajo se ejecuta esta funcion
     $(window).scroll(function() {
        blacknavigator()
      });
      
 })

 //funcion que oscurece la barra de navegacion
 function blacknavigator()
 {
   if ($(this).scrollTop() > 100) {
     $('#header').addClass('header-scrolled');
   } else {
     $('#header').removeClass('header-scrolled');
   }
 }