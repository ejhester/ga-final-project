// wait for the page to be ready...?
$(document).ready(function(){

	// element: nav .international
	// event: click
	// exec: function
	$('#projects li').on('click', function(event){

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

	$('.topLink').click(function(event){
		event.preventDefault();
		$('html, body').animate({
		   scrollTop: ($('#top').offset().top)
		},500);
	})
	$('.projectsLink').click(function(){
		$('html, body').animate({
		   scrollTop: ($('#projects').offset().top)
		},500);
	})
	$('.contactMe').click(function(){
		$('html, body').animate({
		   scrollTop: ($('#contact').offset().top)
		},500);
	})
	$('.contactLink').click(function(){
		$('html, body').animate({
		   scrollTop: ($('#contactMe').offset().top)
		},500);
	})
	// $('.topLink').on('click', function(){
	// 	$( "#top" ).scroll();
	// })
	// $('nav a').on('click', function(event){
	// 	var target = $(this).attr('href');
	// 	var scrollTop = $(target).offset().top;
	// 	$('html, body').animate({
	// 	   scrollTop: scrollTop
	// 	},500);
	// });

});



	
		
		
		
	// else
		// close the #slide-down
		// remove the active class