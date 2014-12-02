jQuery(function($){

  
    
    function showShadow(){    
     if($(window).scrollTop() === 0){
            $(".navbar").css("box-shadow", "0 0 0px rgba(0,0,0,.2)");
        }else{
            $(".navbar").css("box-shadow", "0 0 8px rgba(0,0,0,.2)");
        }
    }

    function adjustSize(){
    
        var windowHeight = $(window).height();
        var headerHeight = $(".homepage .main-banner").height();
        var containerHeight = $(".homepage .main-banner .container").height();
        var navHeight = $("nav").height();
    //    var actionBarHeight = $(".aditional-actions").height();
        
        var realHeight = (windowHeight-navHeight);
        
        
    
    
            if($(window).width()<=768||$(window).height()<=(headerHeight+navHeight)){
                $(".homepage .main-banner").css( "height", "auto");
                $(".homepage .main-banner").css("padding-top", "10px");
                $(".homepage .main-banner").css("padding-bottom", "10px");
    
            }else{
                $(".homepage .main-banner").css("height", realHeight);
                $(".homepage .main-banner").css("padding-top", ((realHeight-containerHeight)/2));
                $(".homepage .main-banner").css("padding-bottom", "auto");
            }
    
    
    }
    
    $(window).scroll(showShadow);
    $(window).resize(adjustSize);
    adjustSize();
    showShadow();
});
