System.register(['angular2/core', './issue-card/issue-card', './issueservice', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, issue_card_1, issueservice_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (issue_card_1_1) {
                issue_card_1 = issue_card_1_1;
            },
            function (issueservice_1_1) {
                issueservice_1 = issueservice_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(issueService) {
                    this.issueService = issueService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.issueService.getIssues().subscribe(function (issues) {
                        _this.issues = issues;
                    });
                    ;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>Git Issues</h1>\n    <div class=\"list-group\" *ngFor=\"#issue of issues\">\n        <issue-card [issue]=\"issue\"></issue-card>\n    <div class=\"list-group\">\n  ",
                        styles: ["\n  "],
                        directives: [issue_card_1.IssueCard],
                        providers: [issueservice_1.IssueService]
                    }), 
                    __metadata('design:paramtypes', [issueservice_1.IssueService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map