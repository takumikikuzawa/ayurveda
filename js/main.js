if (document.images) {
  var img0 = new Image();
  img0.src = 'images/column8.jpg';
  var img1 = new Image();
  img1.src = 'images/treatment.jpg';
  var img2 = new Image();
  img2.src = 'images/astrlogy.png';
  var img3 = new Image();
  img3.src = 'images/diet-remedy.jpg';
  var img4 = new Image();
  img4.src = 'images/online-school.jpg';
}
function On(name) {
  if (document.images) {
    document.images['def'].src = eval(name + '.src');
  }
}
function Off() {
  if (document.images) {
    document.images['def'].src = img0.src;
  }
}

(window.onload = function () {
  jQuery(window).scroll(function () {
    jQuery('.fadeout, .fadeout1').each(function () {
      var winheight = jQuery(window).height();
      var posi = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      if (scroll + winheight > posi) {
        jQuery(this).addClass('fadein');
      }
    });
  });
})();

(window.onload = function () {
  jQuery(window).scroll(function () {
    jQuery('.main__heading-lv2').each(function () {
      var winheight = jQuery(window).height();
      var posi = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      if (scroll + winheight > posi) {
        jQuery(this).addClass('font-anim1');
      }
    });
  });
})();

$(function () {
  $(window).scroll(function () {
    $('.fade-in').css({
      opacity: '0',
      transform: 'translateX(30px)',
    });

    var scroll = $(window).scrollTop();

    var windowHeight = $(window).height();

    $('.fade-in').each(function () {
      var elemPos = $(this).offset().top;

      if (scroll > elemPos - windowHeight + 100) {
        $(this).css({
          opacity: '1',
          transform: 'translateX(0)',
        });
      }
    });
  });
});
