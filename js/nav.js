$(document).ready(function() {

  $('.menu-icon').click(function() {
    $('.nav-items').toggleClass('show-nav-items')
    $(this).toggleClass('menu-icon-transform')
  })

  $('.nav-items a, .download-button').click(function() {
    $('.nav-items').removeClass('show-nav-items')
    $('.menu-icon').removeClass('menu-icon-transform')
  })

})
