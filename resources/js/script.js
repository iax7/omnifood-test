$(document).ready(function() {
    
    // For the sticky navigation
    /* old
    $('.js--section-features').waypoints(function(direction) {
    }, { offset: '60px;' });
    */
    var waypoint = new Waypoint({
        element: $('.js--section-features'),
        handler: function(direction) {
            if (direction == 'down') {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        },
        offset: 60
    });

    // Scroll on buttons
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({ scrollTop: $('.section-plans').offset().top}, 1000);
    })
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({ scrollTop: $('.section-features').offset().top}, 1000);
    })

    // Navigation Scroll
    // https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });

    // Animations on Scroll
    var features = new Waypoint({
        element: $('.js--wp1'),
        handler: function(direction) {
            $('.js--wp1').addClass('animated fadeIn');
        },
        offset: '50%'
    });

    var works = new Waypoint({
        element: $('.js--wp2'),
        handler: function(direction) {
            $('.js--wp2').addClass('animated fadeInUp');
        },
        offset: '50%'
    });

    var cities = new Waypoint({
        element: $('.js--wp3'),
        handler: function(direction) {
            $('.js--wp3').addClass('animated fadeIn');
        },
        offset: '50%'
    });

    var premium = new Waypoint({
        element: $('.js--wp4'),
        handler: function(direction) {
            $('.js--wp4').addClass('animated pulse');
        },
        offset: '50%'
    });

    // Mobile Nav
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('#nav-icon');

        nav.slideToggle(200);

        if (icon.attr('name') === 'ios-menu')
            icon.attr('name', 'close');
        else
            icon.attr('name', 'ios-menu');
    })

});