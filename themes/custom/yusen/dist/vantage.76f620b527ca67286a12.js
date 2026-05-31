(self.webpackChunkyusen = self.webpackChunkyusen || []).push([
    [744], {
        9107: function() {
            var n = jQuery,
                e = new IntersectionObserver((function(e) {
                    e.forEach((function(e) {
                        var s = e.target,
                            t = e.intersectionRatio,
                            i = n(s);
                        t > .9 && !i.hasClass("intersection") ? i.addClass("intersection") : 0 === t && i.hasClass("intersection") && i.removeClass("intersection")
                    }))
                }), {
                    threshold: function() {
                        for (var n = [], e = 0; e <= 1; e += .1) n.push(e);
                        return n
                    }()
                });
            n(".digital-solutions-content-in > .digital-solutions-img").each((function() {
                e.observe(n(this)[0])
            }))
        }
    }
]);