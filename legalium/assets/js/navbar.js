$(function() {
    var navbar = $(".navbar");
    
    $(window).scroll(function() {
    
        var scroll = $(window).scrollTop();
        
        if (scroll >= 100) {
            navbar.removeClass('bg-transparent').addClass("bg-dark");
        } else {
            navbar.removeClass("bg-dark").addClass('bg-transparent');
        }
        
    });
    
});
