$(function () {
    $(window).on('hashchange', function () {
        if (module.isLogin) {
            module.updatePageKey();
            module.fetchIsFav(function () {
                module.setFav(module.favData);
            });
        }
    });
    var module = {
        doms: {},
        init: function () {
            this.fetchUserInfo();
            return this;
        },
        fetchUserInfo: function () {
            $.ajax({
                url: '/frontuc/user/info',
                type: 'POST',
                dataType: 'json',
                success: function (data) {
                    if (data.errcode === 401) {
                        module.fetchRedirectUrl();
                    } else {
                        module.isLogin = true;
                        module.fetchIsFav(function (data) {
                            module.handleFavEvent(data);
                            window._CONFIG.isFav && !data.isfav && module.$dom.trigger('click');
                        });
                    }
                },
                error: function (err) {
                }
            });
        },
        fetchIsFav: function (cb) {
            $.ajax({
                url: '/frontuc/page/isfav',
                type: 'POST',
                data: {
                    page_key: page_key
                },
                dataType: 'json',
                success: function (data) {
                    cb && (module.favData = data.data);
                },
                complete: function () {
                    module.favData = module.favData || {fav: false};
                    cb && cb(module.favData);
                }
            });
        },
        setFav: function (data) {
            var $dom = $('.add-fav');
            $dom[data.isfav ? 'addClass' : 'removeClass']('with-fav').html(data.isfav ? '已收藏' : '收藏');
            var $myFav = $('.my-fav');
            $myFav.prop('href', window.location.href.indexOf('.southcn.') > -1 ? '//cloudtest-znzl.southcn.com/collection' : '//service.gd.gov.cn/collection');
            $myFav.prop("target","_blank");
            data.isfav && $myFav.show();
            !data.isfav && $myFav.hide();
            return $dom;
        },
        handleFavEvent: function () {
            module.$dom = module.setFav(module.favData);
            module.$dom.on('click', function () {
                var data = module.favData;
                $.ajax({
                    url: data.isfav ? '/frontuc/page/unfav' : '/frontuc/page/fav',
                    type: 'POST',
                    data: {
                        page_key: page_key,
                        page_title: document.title,
                        page_url: window.location.href
                    },
                    dataType: 'json',
                    success: function (result) {
                        data.isfav = !data.isfav;
                        module.setFav(data);
                    },
                    error: function (err) {
                    }
                });
            });
        },
        fetchRedirectUrl: function () {
            var url = window.location.href;
            $.ajax({
                url: '/frontuc/gen-redirect-uri',
                type: 'POST',
                data: {
                    redirect_uri: url
                },
                dataType: 'json',
                success: function (data) {
                    $('.add-fav').prop('href', data.data.url);
                },
                error: function (err) {
                }
            });
        },
    };
    module.init();
});