//Smooth Scrolling.
$(function(){
  
    $("a").click(function(event){
        if (this.hash !== "") {
           event.preventDefault();
           
           var gato = this.hash;
           $("html, body").animate({
               scrollTop: $(gato).offset().top
           }, 800, function(){
               window.location.hash = gato;
           });
        }
    });
 
});

//Navbar color
$(window).scroll(function() {
    if ($(this).scrollTop() >= 715) {
        $('nav').addClass("bg-dark");
    } else { ($(this).scrollTop() <= 715) 
        $('nav').removeClass("bg-dark");
    }
});