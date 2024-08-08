(function (){
    $(".code1").on("mouseover", function () {
        $(".qr_1").removeClass("hide");
    });
    $(".code2").on("mouseover", function () {
        $(".qr_2").removeClass("hide");
    });
    $(".code3").on("mouseover", function () {
        $(".qr_3").removeClass("hide");
    });
    $(".code1").on("mouseleave", function () {
        $(".qr_1").addClass("hide");
    });
    $(".code2").on("mouseleave", function () {
        $(".qr_2").addClass("hide");
    });
    $(".code3").on("mouseleave", function () {
        $(".qr_3").addClass("hide");
    });

})();
$("body a").click(function(){
	var url = $(this).attr("href"); 
     
    if(!url||url == 0){
        
    }else{
        if((url.indexOf("gd.gov.cn")>-1 || $.trim(url).substr(0,2).indexOf("./")>-1|| $.trim(url).substr(0,1).indexOf("/")>-1  || $.trim(url).indexOf("cloudtest-ducha.southcn.com")>-1||$.trim(url).indexOf("gov.cn")>-1|| $.trim(url).indexOf("#")>-1 || $.trim(url).indexOf("javascript:")>-1)){
            return true;
        }else{
            checkUrl(url);
            return false;
            
        }
    }
        

});
$(".layui-layer-btn0").click(function(){
	var url = $(".layui-layer-btn0").attr("data-url");
	// window.location.href = url;
    window.open(url,"_blank");
    $(".filter").hide();
	$(".aTips").hide();
});

$(".layui-layer-btn1").click(function(){
	$(".filter").hide();
	$(".aTips").hide();
});

function checkUrl(url){
    $("body").css("transform", "");
	$(".filter").show();
	$(".aTips").show();
	$(".layui-layer-btn0").attr("data-url",url);
}
