$(document).ready(function () {



    /* For the sticky navigation */
    $('.js--sectotion-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');

        }
    },{
        offset: '60px;'
    });

    /*Scroll on buttons */
    $('.js--scroll-to-plan').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    })
    $('.js--scroll-to-start').click(function () {
        $('html,body').animate({scrollTop: $('.js--sectotion-features').offset().top}, 1000);
    })

    /* Navigation scroll */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

      /* Animation on scrooll*/
      $('.js--wp-1').waypoint(function(direction) {
          $('.js--wp-1').addClass('animated fadeIn')
      },{
        offset: '50%'
    });
      $('.js--wp-2').waypoint(function(direction) {
          $('.js--wp-2').addClass('animated fadeInUp')
      },{
        offset: '50%'
    });
      $('.js--wp-3').waypoint(function(direction) {
          $('.js--wp-3').addClass('animated fadeIn')
      },{
        offset: '50%'
    });
      $('.js--wp-4').waypoint(function(direction) {
          $('.js--wp-4').addClass('animated pulse')
      },{
        offset: '50%'
    });
      
    




    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window') 
    //   }, {
    //     offset: '25%'
    //   }
});