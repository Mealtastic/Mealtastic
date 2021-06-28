$(document).ready(function() {

  //alert('Version: 18:28')

  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    var scale = 70
    var opacity = 1
    scale += st / 40
    opacity -= st / 300
    if (st > 600) {
      scale = 85
      opacity = 0
      $("header img").css("position", "absolute")
      $("nav").addClass("shadow")
    } else {
      $("header img").css("position", "fixed")
      $("nav").removeClass("shadow")
    }
    $("header img").css("height", scale + "vh")
    $(".header-title").css("opacity", opacity)
  });

})
