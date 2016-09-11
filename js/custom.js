$(document).ready(function(){
    
    
    //-- START -- SET ACTIVE TAB
    
    var url_parts = location.href.split('/');

    var last_segment = url_parts[url_parts.length-1];
    //var ruta = "/panaderia/" + last_segment;
    console.log(last_segment);
    
    $('.navbar-nav a[href="/' + last_segment + '"]').parent().addClass('active');
    
    //-- END -- SET ACTIVE TAB
    
    
    //-- START -- MAIN BANNER
    $('.banner-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 0,
        nav: true,
        items: 1
    });
    //--END -- MAIN BANNER
    
    //-- START -- INSTALACIONES SLIDER
     $('.instalaciones-bxslider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 0,
        nav: false,
        items:1
    });
    //--END -- INSTALACIONES SLIDER
    
    //--START -- GALLERY SLIDER
    $('.gallery-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 0,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:3
            },
            991:{
                items:4
            },
            1200:{
                items: 5
            }
        }
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