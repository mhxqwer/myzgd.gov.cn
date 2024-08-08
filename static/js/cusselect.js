$(function () {
        $(".foot .cusSelect").on("mouseenter",function(e){
            //  $(this).children(".cusOpSet").show();
            $(this).siblings().children(".cusOpSet").hide();

            var currentEle = $(this).find(".cusOpSet");
            var parentHeight = currentEle.parent().height();
            var eleHeight = currentEle.height();
            var eleOffestHeight = currentEle.parent().offset().top;
            var winHeight = $(window).height();
            var scrollHeight = $(document).scrollTop();
            if((eleOffestHeight+eleHeight+parentHeight)>0){
                currentEle.css("bottom",parentHeight+"px");
            }else{
                currentEle.css("bottom","unset");
            }
            var winWidth = $(window).width();
            var eleWidth = currentEle.width();
            var eleOffestLeft = currentEle.parent().offset().left;
            if((eleWidth+eleOffestLeft)>winWidth){
                currentEle.css("left","unset").css("right",0);
            }else{
                currentEle.css("left",0).css("right","unset");
            }
            currentEle.toggle();
            currentEle.scrollTop(0);
            currentEle.focus();
            e.stopPropagation();
        });
        $(".foot .cusOpSet").on('mouseleave', function () {
            $(this).hide();
        })
        $(document).on("click",function(){
            $(".foot .cusOpSet").hide();
            $(".footLink .cusOpSet").slideUp(300);
            $(".cusTitle").removeClass("active");
        })
        $(".footLink .cusOpSet li a").on('click', function (e) {
            $(".cusOpSet").slideUp(300);
            $(".cusTitle").removeClass("active");
        });
        $(".footLink .cusSelect .cusTitle").on("click", function () {
            if (event.stopPropagation) {
                // 针对 Mozilla 和 Opera
                event.stopPropagation();
            } else if (window.event) {
                // 针对 IE
                window.event.cancelBubble = true;
            }
            $(".footLink .cusSelect .cusTitle").removeClass("active");
            $(".footLink .cusSelect .cusOpSet").slideUp();
            if ($(this).parent(".cusSelect").find(".cusOpSet").is(':visible')) {//如果可见
                $(this).removeClass("active");
                $(this).parent(".cusSelect").find(".cusOpSet").slideUp();
            } else {
                $(this).addClass("active");
                $(this).parent(".cusSelect").find(".cusOpSet").slideDown();
            }
        });
    });