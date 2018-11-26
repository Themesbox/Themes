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
		        $(".nav-item-1").addClass("active"); 
		    } else { 
		        $(".nav-item-1").removeClass("active");
		    }
		    if (scroll >= SectionTwoOffset) { 
		        $(".nav-item-2").addClass("active"); 
			$(".nav-item-1").removeClass("active"); 
		    } else { 
		        $(".nav-item-2").removeClass("active"); 
		    }
        
    }); 
});
