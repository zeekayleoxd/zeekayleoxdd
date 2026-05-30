(self.webpackChunkyusen = self.webpackChunkyusen || []).push([
    [985], {
        8217: function() {
            var n = jQuery;
            n(".cta-container").each((function(c, a) {
                var t = n(a),
                    e = t.find(".cta-tracking-submit"),
                    i = t.find(".cta-tracking-input"),
                    o = t.find(".cta-item-options"),
                    u = e.data("baseUrl");
                e.click((function() {
                    var n = i.val(),
                        c = o.find('input[type="radio"]:checked').data("key"),
                        a = "".concat(u).concat(c, "=").concat(encodeURIComponent(n));
                    window.open(a)
                }))
            }))
        }
    }
]);