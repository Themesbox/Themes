$(function() {
    
    var navbar = $(".navbar");
    
    $(window).scroll(function() {
        
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            navbar.removeClass('bg-transparent').addClass("bg-dark");
        } else {
            navbar.removeClass("bg-dark").addClass('bg-transparent');
        } 
        
        SectionOneOffset = $('#about').offset().top, 
	SectionTwoOffset = $('#services').offset().top;

		    if (scroll >= SectionOneOffset) { 
		        $("li .nav-item-1").addClass("active"); 
		    } else { 
		        $("li .nav-item-1").removeClass("active");
		    }
		    if (scroll >= SectionTwoOffset) { 
		        $("li .nav-item-2").addClass("active"); 
			$("li .nav-item-1").removeClass("active"); 
		    } else { 
		        $("li .nav-item-2").removeClass("active"); 
		    }
        
    }); 
});
