$(function() {

	$(".navbar-toggle").on('click', function() {
	    if($(".navbar-collapse").hasClass('in')) {
            $(".hamburger").removeClass('is-active');
        } else {
            $(".hamburger").addClass('is-active');
        }
    });

});
