(self.webpackChunkyusen = self.webpackChunkyusen || []).push([
    [25], {
        6985: function(i, n, e) {
            "use strict";
            e.r(n);
            var t, s = e(4612),
                a = e.n(s),
                o = (e(9155), jQuery),
                c = o(".iv-icon-set-thumbnail-mobile");
            o(window).on("load resize", (function() {
                var i;
                t && (t.destroy(), t = ""), o(window).outerWidth() <= 991 && (function() {
                    if (c.find(".iv-icon-set-item-thumbnail").length <= 0) {
                        var i = o(".iv-icon-set-container").find(".swiper-slide .iv-icon-set-item-thumbnail").clone();
                        c.append(i)
                    }
                }(), (i = c.find(".iv-icon-set-item-thumbnail")).find(".active").length < 1 && i.first().addClass("active"), t = new(a())(".iv-icon-set-container", {
                    pagination: {
                        el: ".swiper-pagination-iv-icon-set",
                        clickable: !0
                    },
                    on: {
                        slideChange: function() {
                            c.find(".iv-icon-set-item-thumbnail").eq(this.activeIndex).addClass("active").siblings().removeClass("active")
                        }
                    }
                }))
            }))
        }
    }
]);