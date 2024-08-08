(function(window){
    var a = '//statistics.gd.gov.cn/visit/';
    try{
        if(window.location.href.indexOf('post_') > 0){
            var s1 = window.location.href.split('post_');
            if(s1.length > 1){
                var s2 = s1[1].split('.');
                if(s2.length > 1){
                    window.NFCMS_PUB_TYPE = 'post';
                    window.NFCMS_POST_ID = parseInt(s2[0]);
                }
            }
        }
    }catch(e){
        window.NFCMS_STAT_ERROR = e.message;
    }
    switch(window.NFCMS_PUB_TYPE){
        case 'post':
            a += 'post?site=' + window.NFCMS_SITE_ID + '&post=' + window.NFCMS_POST_ID;
            break;
        case 'cat':
            a += 'cat?site=' + window.NFCMS_SITE_ID + '&cat=' + window.NFCMS_CAT_ID;
            break;
        default:
            if ('NFCMS_PAGE_ID' in window) {
                a += 'page?site=' + window.NFCMS_SITE_ID + '&page=' + window.NFCMS_PAGE_ID + '&u=' + encodeURIComponent(window.location.href);
            } else {
                a += 'page?site=' + window.NFCMS_SITE_ID + '&u=' + encodeURIComponent(window.location.href);
            }
            break;
    }
    a += '&t=' + Math.random();
    setTimeout(function(){
        var b = new Image();
        b.onload = function(){
            document.body.appendChild(b);
            setTimeout(function(){ document.body.removeChild(b)}, 100);
        };
        b.src = a;
    }, 100);
})(window);
