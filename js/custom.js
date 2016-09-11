$(document).ready(function(){
    
    
    //-- START -- SET ACTIVE TAB
    
    var url_parts = location.href.split('/');

    var last_segment = url_parts[url_parts.length-1];
    //var ruta = "/panaderia/" + last_segment;
    console.log(last_segment);
    
    $('.navbar-nav a[href="/' + last_segment + '"]').parent().addClass('active');
    
    //-- END -- SET ACTIVE TAB
    
    
    //-- START -- MAIN BANNER
    $(".bxslider").bxSlider({
        mode: 'fade',
        touchEnabled: true,
        //captions: true,
        auto: true,
        pause: 50000
    });
    //--END -- MAIN BANNER
    
    //-- START -- INSTALACIONES SLIDER
    $(".instalaciones-bxslider").bxSlider({
        mode: 'fade',
        auto: true,
        touchEnabled: true,
        pause: 5000,
        pagerCustom: '#bx-pager'
    });
    //--END -- INSTALACIONES SLIDER
    
    //--START -- GALLERY SLIDER
    var slide_width = 200;
    var window_width = $(window).width();
    
    if(window_width < 768){
        slide_width = window_width;
    } else if (window_width < 991){
        slide_width = window_width / 2;
    } else if (window_width < 1399){
        slide_width = window_width / 3;
    } else{
        slide_width = window_width / 4;
    }
    
    $('.gallery_bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 4,
        slideWidth: slide_width,
        slideMargin: 10,
        ticker: true,
        touchEnabled: true,
        speed: 70000
    });
    //-- END -- GALLERY SLIDER
    
    //-- START -- GOOGLE PLUS FEED
    $('.google_container').kycoGooglePlusFeed2({
        id: '109942957159118513809', //panaderia
      //id: '104486831865255020144', //yo
//id: '116899029375914044550', //google
        profileImageSize: 150,
        feedPosts: 3,
        postsIncrement: 1,
        maxPosts: 20
    });
    //-- END -- GOOGLE PLUS FEED
    
    
    
});