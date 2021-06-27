$(document).ready(function() {

  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    var scale = 65
    scale += st / 40
    if (scale > 80) {
      scale = 80
    } else {
      $(".content").css("top", st)
    }
    $("header img").css("height", scale + "%")
  });

})
