// wait for the page to be ready...?
$(document).ready(function(){

	// element: nav .international
	// event: click
	// exec: function
	$('li').on('click', function(event){

		event.preventDefault();

		// if the tab is active
		if ( $(this).hasClass('active') ) {

			$(this).removeClass('active');
			$('#slide-down').slideUp();

		} else {
			// mark the nav .international as the active tab - add a class of "active"
			$(this).addClass('active').siblings().removeClass('active');

			// hide all the sections of articles
			$('.drop').hide();

			// show the international articles
			var target = $(this).find('a').attr('href');
			console.log(target);
			$(target).show();

			// open the #slide-down
			$('#slide-down').slideDown();
		}
	});

});



	
		
		
		
	// else
		// close the #slide-down
		// remove the active class