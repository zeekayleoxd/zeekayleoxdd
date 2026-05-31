(self.webpackChunkyusen = self.webpackChunkyusen || []).push([
    [144], {
        6498: function() {
            var e;
            e = jQuery, Drupal, e(".component-with-title-line").each((function(t, l) {
                var n = e(l).find(".com-title");
                n.length && (n.toggleClass("right", t % 2 != 0), n.find('[class*="title-line-"]').attr("class", t % 2 != 0 ? "title-line-02" : "title-line-01"))
            }))
        }
    }
]);