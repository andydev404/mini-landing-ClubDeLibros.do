$(document).ready(function(){
    var container = $('.registry-container');
  $('#register-button').click(function() {

      if (container.hasClass('hide')) {
          container.removeClass('hide');
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
            }
            }
          
      } 
      else {
          return false;
      }
    
  });
});
