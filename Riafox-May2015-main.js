$(function() {

     /**
      * Mobile Nav
      *
      * Toggle Side Menu - Left or Right
      */
    
    // Prepend a mobile icon to the header
    $(".custom-menu-primary").before('<a class="mobile-icon"></a>');
    
    // Prepend a close icon to the menu
    $(".custom-menu-primary .hs-menu-flow-horizontal > ul").before('<a class="close-icon"><span></span></a>');
    
    // Add body class on mobile icon click
    $(".mobile-icon, .close-icon").click(function(){
        $("body").toggleClass("show-mobile-nav");
    });
    
    // Set the menu height to 100% of the document
    function setMenuHeight(){
		if ( $(window).width() <= 767) {     
	      	var height = $(window).outerHeight(true);
		   	$(".custom-menu-primary").height(height);
		}   
	}
	setMenuHeight();
	$(window).on("resize", setMenuHeight);
    
    // Wrap body contents with a div so the transforms will work
    $('body> div').find('script:not(script[type="IN/Share"])').remove().end().wrapAll('<div id="site-wrapper"></div>');
    
    $('#site-wrapper').after('<a id="back-to-top" href="#top"></a>');

    $(window).scroll(function(){
        if ($(window).scrollTop() > 200){
            $("#back-to-top").addClass('on');
        }
        else{
            $("#back-to-top").removeClass('on');
        }
    });
    $("#site-wrapper").scroll(function(){
        if ($("#site-wrapper").scrollTop() > 200){
            $("#back-to-top").addClass('on');
        }
        else{
            $("#back-to-top").removeClass('on');
        }
    });
    //back to top
    $("#back-to-top").click(function(){
        $('body,html, #site-wrapper').animate({scrollTop:0},500);
        return false;
    });
    
    $('.blog .blog-sidebar .widget-type-google_search input[type="text"]').attr('placeholder','Search');
    $('.blog .blog-sidebar .widget-type-google_search .hs-button.primary').empty();

});
