$(document).ready(function(){

    $('.carousel').carousel({        
        interval: 5000
    });

//Rotates img 360 degrees when moused over and out.
    $("img.iconFlip").hover(function(){
        $(this).removeClass('outIcon');
        $(this).toggleClass("overIcon");
        
        
    },function(){
        $(this).toggleClass("overIcon");
        $(this).addClass('outIcon');
    });
//Elevates box shadowing of cards to "move" the cards
    $(".resume_body_card").hover(function(){
        $(this).toggleClass('box-shadow-hover');
        $(this).toggleClass('box-shadow-hover-deep');
    },function(){
        $(this).toggleClass('box-shadow-hover');
        $(this).toggleClass('box-shadow-hover-deep');
    });
})
