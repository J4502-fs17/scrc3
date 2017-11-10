$(document).ready(function(){
  $(".menu-trigger").click(function(){
    $("nav ul").slidetoggle(500);
  });

 $(window).resize(function(){
   if($(window).width()>500) {
     $("nav ul").removeatter("style");
   }

  });
});
