(self.webpackChunkyusen = self.webpackChunkyusen || []).push([
    [493], {
        9493: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n(4612),
                i = n.n(s),
                r = (n(9155), jQuery),
                a = r(".latest-news-left").children(),
                l = new(i())(".latest-news-swiper-container", {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: "4.33334%",
                    pagination: {
                        el: ".latest-news-swiper-pagination",
                        clickable: !0
                    },
                    observer: !0,
                    navigation: {
                        nextEl: ".latest-news-swiper-button-next",
                        prevEl: ".latest-news-swiper-button-prev"
                    }
                });
            r(".latest-news-swiper-button-prev").click((function() {
                l.slidePrev()
            })), r(".latest-news-swiper-button-next").click((function() {
                l.slideNext()
            })), r(window).on("load resize", (function() {
                r(window).outerWidth() <= 991 ? (r(".latest-news-right").find(".swiper-wrapper").prepend(a), l.destroy(), (l = new(i())(".latest-news-swiper-container", {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: "4.33334%",
                    pagination: {
                        el: ".latest-news-swiper-pagination",
                        clickable: !0
                    },
                    observer: !0,
                    navigation: {
                        nextEl: ".latest-news-swiper-button-next",
                        prevEl: ".latest-news-swiper-button-prev"
                    }
                })).update()) : (l.destroy(), r(".latest-news-left").append(a), r(".latest-news-right").find(a).remove())
            }))
        }
    }
]);