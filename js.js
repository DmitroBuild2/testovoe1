$(document).ready(function() {
     
    $('.open-modal').click(function(){
        $('.popup_banner, .overlay').fadeIn();
      })
      $('.popup_banner .popup_close').click(function(){
        $('.popup_banner, .overlay').fadeOut();
      })
      $('.overlay').click(function(){
        $('.popup_banner, .overlay').fadeOut();
      })


});