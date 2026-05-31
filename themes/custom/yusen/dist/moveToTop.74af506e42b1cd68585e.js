(self.webpackChunkyusen = self.webpackChunkyusen || []).push([
    [995], {
        587: function() {
            var o = jQuery;
            o(window).on("load scroll", (function() {
                var t = o("#toTop").height(),
                    n = o("#comFooter").height(),
                    s = o(this).scrollTop(),
                    c = o("#toTop").scrollTop(),
                    p = o(document).height(),
                    e = o(this).height();
                s + e < p - n && (o("#toTop").css("top", "auto"), o("#toTop").fadeIn(500)), (s > 0 && s + e) >= p - n && o("#toTop").css("top", c - s + p - n - t - 15), 0 === s && (o("#toTop").css("top", "auto"), o("#toTop").fadeOut(500))
            })), o(window).on("load", (function() {
                o("#toTop").on("click", (function() {
                    o("html,body").animate({
                        scrollTop: 0
                    }, "slow")
                }))
            }))
        }
    }
]);