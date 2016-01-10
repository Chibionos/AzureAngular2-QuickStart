System.register(['rxjs/add/operator/map'], function(exports_1) {
    var Issue;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            Issue = (function () {
                function Issue(html_url, title, body) {
                    this.html_url = html_url;
                    this.title = title;
                    this.body = body;
                }
                return Issue;
            })();
            exports_1("Issue", Issue);
        }
    }
});
//# sourceMappingURL=issue.js.map