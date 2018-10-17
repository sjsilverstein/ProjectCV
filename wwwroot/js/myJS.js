function MyProjects() {
    var elmnt = document.getElementById("Projects");
    elmnt.scrollIntoView();
}

$(document).ready(function(){

    

    $('.carousel').carousel({        
        interval: 6000
    });
//Swap Img with another when moused over    
    function imgSwap(selector){
        var temp = $(selector).attr("src");
        $(selector).attr("src", $(selector).attr("other"));
        $(selector).attr("other", temp);
    }
    $("img.portrait").hover(function(){
        console.log ("test");
        imgSwap($(this));
    },function(){
        imgSwap($(this));
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
        $(this).toggleClass('test');
        
    },function(){
        $(this).toggleClass('box-shadow-hover');
        $(this).toggleClass('box-shadow-hover-deep');
        $(this).toggleClass('test');

    });
    
})
