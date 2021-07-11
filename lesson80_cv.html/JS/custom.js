$(document).ready(function(){
	// header color change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored");
		}
	})

	// WOW plugins initailize

	if(screen.width > 768){
		new WOW().init();

	  $('[data-fancybox="group"]').fancybox({
		// Options will go here
		loop : true
	});
	}
    

	//stellar
	if(screen.width > 768){
		$(window).stellar();
	}
	
})
