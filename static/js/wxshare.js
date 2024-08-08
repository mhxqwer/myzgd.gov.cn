(function(window){
    window.wxShare = function(shareOpt){
        var appid = shareOpt.appid;
        window.wxonr = function(opt){
            wx.config({
                debug : false,
                appId : opt.appid,
                timestamp : opt.timestamp,
                nonceStr : opt.noncestr,
                signature : opt.signature,
                jsApiList : [
                    "onMenuShareTimeline", 
                    "onMenuShareAppMessage", 
                    "onMenuShareQQ", 
                    "onMenuShareWeibo",
                    "onMenuShareQZone"
                ]
            });
            wx.ready(function(){
                var cc = {
                    title : shareOpt.title,
                    desc : shareOpt.desc,
                    link : shareOpt.link,
                    imgUrl : shareOpt.imgUrl,
                    success : function (){ 
                        shareOpt.success && shareOpt.success.apply(arguments);
                    },
                    cancel : function (){ 
                        shareOpt.cancel && shareOpt.cancel.apply(arguments);
                    }
                };
                wx.onMenuShareTimeline(cc);
                wx.onMenuShareAppMessage(cc);
                wx.onMenuShareQQ(cc);
                wx.onMenuShareWeibo(cc);
                wx.onMenuShareQZone(cc);
            });
        }

        if (/MicroMessenger/i.test(navigator.userAgent) && window.top === window.self) {
            // 微信内置浏览器并且不是被 iframe 嵌入的情况
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://newmedia.cloud.gd.gov.cn/api/service/jsapi?appid=' + appid + '&ref=' + btoa(document.location.href);
            setTimeout(function () {document.body.appendChild(s);}, 100)
        }
    }
})(window);
