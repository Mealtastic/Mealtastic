$(document).ready(function() {

  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    var scale = 65
    var opacity = 1
    scale += st / 40
    opacity -= st / 300
    if (st > 600) {
      scale = 80
      opacity = 0
      $("header img").css("position", "absolute")
      $("nav").addClass("shadow")
    } else {
      $("header img").css("position", "fixed")
      $("nav").removeClass("shadow")
    }
    $("header img").css("height", "calc(var(--real-vh) * " + scale + ")")
    $(".header-title").css("opacity", opacity)
  });

})
