(function($) {
    $(function() {
        //Initialize commands
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();

        var options = [{    // Animate skill bar on scroll down
            selector: '#skills',
            offset: 200,
            callback: function() {
                $('.skillbar').each(function() {
                    $(this).find('.skillbar-bar').animate({
                        width: $(this).attr('data-percent')
                    }, 6000);
                });
            }
        }, {              // Fade in Cyber Abuse Detection
            selector: '#cyber-abuse-detection',
            offset: 100,
            callback: function(el) {
                Materialize.fadeInImage($(el));
                console.log(el);
            }
        }, {            // Fade in IRate ISchool
            selector: '#irateischool',
            offset: 200,
            callback: function(el) {
                Materialize.fadeInImage($(el));
                console.log(el);
            }
        }];
        Materialize.scrollFire(options);

        Materialize.fadeInImage('#photo');  //Fade in profile photo
        Materialize.showStaggeredList('#description') //Animate description

    }); // end of document ready
})(jQuery); // end of jQuery name space
