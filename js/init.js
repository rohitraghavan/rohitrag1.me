(function($) {
    $(function() {
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();
        var options = [{
            selector: '#skills',
            offset: 400,
            callback: animateSkillbar()
        }, ];
        Materialize.scrollFire(options);

    }); // end of document ready
})(jQuery); // end of jQuery name space

// Skill bar
function animateSkillbar() {
    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
}
