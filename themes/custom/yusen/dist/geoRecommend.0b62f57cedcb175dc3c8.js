(self.webpackChunkyusen = self.webpackChunkyusen || []).push([
    [780], {
        3880: function() {
            var e = jQuery,
                o = e(".geo-recommend");
            e(window).on("load", (function() {
                var n = setInterval((function() {
                    void 0 !== window.OneTrust && "function" == typeof window.OneTrust.getGeolocationData && (clearInterval(n), function() {
                        var n;
                        try {
                            n = window.OneTrust ? window.OneTrust.getGeolocationData() : void 0
                        } catch (e) {
                            n = void 0
                        }
                        var t = drupalSettings.geoRecommendInfo;
                        if (n && t.hasOwnProperty(n.country)) {
                            var a = t[n.country];
                            if (n.country === a.current_code) return;
                            var c = '\n<div class="geo-recommend-content">\n  <p>'.concat(a.message, '</p>\n  <div class="geo-recommend-btns">\n    <a class="geo-recommend-link" href="').concat(a.link, '">\n                    ').concat(a.country_name, " ").concat(a.language, '\n                </a>\n                <button class="geo-recommend-close">').concat(Drupal.t("Close"), "</button>\n            </div>\n        </div>");
                            o.html(c), o.find(".geo-recommend-close, .geo-recommend-link").click((function() {
                                var o = e(this).closest(".geo-recommend"),
                                    n = o.data("id"),
                                    t = Date.now();
                                o.hide(), localStorage.setItem("hide_".concat(n), !0), localStorage.setItem("date", t.toString())
                            }))
                        }
                        var r = Date.now();
                        if (localStorage.getItem("date")) {
                            var i = parseInt(localStorage.getItem("date"), 10);
                            Math.floor((r - i) / 864e5) > 30 && localStorage.removeItem("hide_geo-recommend")
                        }
                        o.each((function(o, n) {
                            var t = e(n).data("id");
                            localStorage.getItem("hide_".concat(t)) || e(n).show()
                        }))
                    }())
                }), 100)
            }))
        }
    }
]);