(self.webpackChunkyusen = self.webpackChunkyusen || []).push([
    [895], {
        9540: function() {
            var t = jQuery,
                a = t(".call-to-action").find(".horizontal-tabs > ul.horizontal-tabs-list");
            a.children("li").click((function() {
                var n = t(this).position().left;
                a.animate({
                    scrollLeft: n
                }, 300)
            })), t('.call-to-action .cta-tracking input[type="radio"]').each((function() {
                var a = t(this).attr("id"),
                    n = Math.floor(1e3 * Math.random() + 100);
                t(this).next("label").length && (t(this).attr("id", "".concat(a).concat(n)), t(this).next("label").attr("for", "".concat(a).concat(n)))
            }))
        }
    }
]);