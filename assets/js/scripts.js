/*!
 * Authorito
 * Authorito
 * 
 * @author Authorito
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
$(function() {
  var header = $('.navbar-up');
  console.log(header);
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      header.removeClass('navbar-up').addClass('navbar-down');
    } else {
      header.removeClass('navbar-down').addClass('navbar-up');
    }
  });
});
