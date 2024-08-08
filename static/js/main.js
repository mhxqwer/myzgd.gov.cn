//右漂浮
$(window).scroll(function(){
    var oTop=$(document).scrollTop()+240;
    $(".floatPanel").stop().animate({top:oTop});
});

function backToTop(){
    /*$('html ,body').animate({scrollTop: 0}, 300);*/
    $(".floatPanel").stop().animate({right:-46});
    $(".floatPanel .fp-itm1").show();
    $(".floatPanel .fp-itm1").stop().animate({opacity:1});
}

function reShow(){
    /*$('html ,body').animate({scrollTop: 0}, 300);*/
    $(".floatPanel").stop().animate({right:0});
    $(".floatPanel .fp-itm1").stop().animate({opacity:0});
    $(".floatPanel .fp-itm1").hide();
}

$(window).scroll(function(){
    var oTop=$(document).scrollTop()+240;
    $(".codecontainer").stop().animate({top:oTop});
});



$("#lFont").on("click",function(){
    $(".zw").css("font-size","24px").css("line-height","48px");
});

$("#mFont").on("click",function(){
    $(".zw").css("font-size","16px").css("line-height","32px");
});

$("#sFont").on("click",function(){
    $(".zw").css("font-size","14px").css("line-height","28px");
});


$(".ztzl-itm").hover(function(){
    $(this).find(".ztzl-til").css("visibility","visible");
},function(){
    $(this).find(".ztzl-til").css("visibility","hidden");
});

$("#wjk").hover(function(){
    $(".p3l-wrap").removeClass("active");
    $(this).addClass("active");
    $(".p3leftSet").hide();
    $(".wjkSet").show();
});

$("#gsgg").hover(function(){
    $(".p3l-wrap").removeClass("active");
    $(this).addClass("active");
    $(".p3leftSet").hide();
    $(".gsggSet").show();
});

$("#rsrm").hover(function(){
    $(".p3l-wrap").removeClass("active");
    $(this).addClass("active");
    $(".p3leftSet").hide();
    $(".rsrmSet").show();
});

$("#btn_bsfw").on("click",function(){
    resetBtn();
    $(this).find("img").attr("src","images/icon_on_1x.jpg");
    $(".p3_wrap").animate({height:"580",marginLeft:"0"},300);
    // $(".bsfwSet").show();
    // $(".zwgkSet").hide();
    // $(".hdjlSet").hide();
});

$("#btn_zwgk").on("click",function(){
    resetBtn();
    $(this).find("img").attr("src","images/icon_on_2.jpg");
    $(".p3_wrap").animate({height:"625",marginLeft:"-1200px"},300);
    // $(".bsfwSet").hide();
    // $(".zwgkSet").show();
    // $(".hdjlSet").hide();
});

$("#btn_hdjl").on("click",function(){
    resetBtn();
    $(this).find("img").attr("src","images/icon_on_3.jpg");
    $(".p3_wrap").animate({height:"720",marginLeft:"-2400px"},300);
    // $(".bsfwSet").hide();
    // $(".zwgkSet").hide();
    // $(".hdjlSet").show();
});

function resetBtn(){
    $("#btn_bsfw img").attr("src","images/icon_off_1x.jpg");
    $("#btn_zwgk img").attr("src","images/icon_off_2.jpg");
    $("#btn_hdjl img").attr("src","images/icon_off_3.jpg");
}

$(".grbs").on("click",function(){
    var index = $(this).index();
    $(".grbs").removeClass("active");
    $(this).addClass("active");
    $(".bsfwIcon-swiper").hide();
    $(".bsfwIcon-swiper").eq(index).show();
});