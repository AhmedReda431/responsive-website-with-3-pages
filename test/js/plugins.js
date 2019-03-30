/* global $,console ,fadeIn(),fadeOut()*/
$(document).ready(function(){
    $(".std .row>div:even").css({backgroundColor:"#eee"});
    $(".std .row>div:odd").css({backgroundColor:"#ccc"});
    $(".std .secondRow1>div:even").css({backgroundColor:"#ccc"})
    $(".std .secondRow1>div:odd").css({backgroundColor:"#eee"});
    $(".std .secondRow2>div:even").css({backgroundColor:"#ccc"})
    $(".std .secondRow2>div:odd").css({backgroundColor:"#eee"});
    $(".std .overAll").mouseenter(function(){
        $(this).show(1000)
    });
    $(".std-foot1").click(function(){
        $(this).hide();
        $(".hidden-sec").show();
        $(".std-foot2").show();
    })
    $(".std-foot2").click(function(){
        $(this).hide();
        $(".secondRow2").show()
        $(".std-foot3").show();
    })
    $(".std-foot3").click(function(){
        $(this).hide();
        $(".secondRow2").hide()
        $(".std-foot4").show();
    })
    $(".std-foot4").click(function(){
        $(this).hide();
        $(".hidden-sec").hide();
        $(".std-foot1").show();
    });
    $(window).on("scroll",function(){
        var sc = $(window).scrollTop();
        if(sc > 800){
            $(".buttonn").fadeIn(1000)
        }else{
            $(".buttonn").fadeOut(1000)
        }
    });
    $(".buttonn").click(function(){
        $("html,body").animate({scrollTop:0},600,function(){
            $(".buttonn").fadeOut(1000)
        });
    });
});
