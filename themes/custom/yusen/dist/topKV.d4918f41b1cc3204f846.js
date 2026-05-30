(self.webpackChunkyusen = self.webpackChunkyusen || []).push([
    [883], {
        3063: function() {
            var i = jQuery;
            i(window).on("load resize", (function() {
                ! function() {
                    var e = i(".layout").eq(0).find(".layout__region > div:first-child .top-kv");
                    if (e.length) {
                        var t = i(window).outerWidth(),
                            o = i(window).outerHeight();
                        if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android|iOS)/i) && o > t) return void e.removeAttr("style");
                        var a = e.offset().top,
                            n = i(".top-kv").next(".top-kv-cta").find(".call-to-action"),
                            l = o - a,
                            d = 540;
                        t > 576 && t < 991 && (d = 680), n.length && (l -= n.find(".field-group-tabs-wrapper").height()), l = l > 540 ? l > d ? d : l : 540, e.css("paddingBottom", 0), e.css("height", l);
                        var r = i(".top-kv").width() / l,
                            s = e.find(".top-kv-media".concat(t < 991 ? "-mobile" : "")).find(".mpeg-player, .mpeg-video, img, video");
                        s.width() / s.height() < r ? s.addClass("full-horizontal").removeClass("full-vertical") : s.removeClass("full-horizontal").addClass("full-vertical")
                    }
                }()
            }))
        }
    }
]);