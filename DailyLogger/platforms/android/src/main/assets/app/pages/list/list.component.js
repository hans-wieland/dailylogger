"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var firebase = require("nativescript-plugin-firebase");
var ListComponent = (function () {
    function ListComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.exerciseList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.exerciseList.push({ name: "Apples" });
        this.exerciseList.push({ name: "Bananas" });
        this.exerciseList.push({ name: "Oranges" });
    };
    ListComponent.prototype.testPush = function () {
        alert("hello");
        firebase.push('/users', {
            'list': this.exerciseList
        }).then(function (result) {
            console.log("created key: " + result.key);
        });
    };
    ListComponent.prototype.about = function () {
        this.routerExtensions.navigate(["/about"]);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        moduleId: module.id,
        templateUrl: "./list.html",
        styleUrls: ["./list-common.css", "./list.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFDL0QsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFRekQsSUFBYSxhQUFhO0lBQ3hCLHVCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUd0RCxpQkFBWSxHQUFtQixFQUFFLENBQUM7SUFEbEMsQ0FBQztJQUdELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLFFBQVEsQ0FBQyxJQUFJLENBQ1gsUUFBUSxFQUNSO1lBQ0UsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQzFCLENBQ0osQ0FBQyxJQUFJLENBQ0YsVUFBQSxNQUFNO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FDSixDQUFDO0lBQ0YsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsYUFBYTtRQUMxQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUM7S0FDL0MsQ0FBQztxQ0FFc0MseUJBQWdCO0dBRDNDLGFBQWEsQ0E2QnpCO0FBN0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9saXN0Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2xpc3QtY29tbW9uLmNzc1wiLCBcIi4vbGlzdC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuXG4gIH1cbiAgZXhlcmNpc2VMaXN0IDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXhlcmNpc2VMaXN0LnB1c2goeyBuYW1lOiBcIkFwcGxlc1wiIH0pO1xuICAgIHRoaXMuZXhlcmNpc2VMaXN0LnB1c2goeyBuYW1lOiBcIkJhbmFuYXNcIiB9KTtcbiAgICB0aGlzLmV4ZXJjaXNlTGlzdC5wdXNoKHsgbmFtZTogXCJPcmFuZ2VzXCIgfSk7XG4gIH1cblxuICB0ZXN0UHVzaCgpIHtcbiAgICBhbGVydChcImhlbGxvXCIpO1xuICAgIGZpcmViYXNlLnB1c2goXG4gICAgICAnL3VzZXJzJyxcbiAgICAgIHtcbiAgICAgICAgJ2xpc3QnOiB0aGlzLmV4ZXJjaXNlTGlzdFxuICAgICAgfVxuICApLnRoZW4oXG4gICAgICByZXN1bHQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQga2V5OiBcIiArIHJlc3VsdC5rZXkpO1xuICAgICAgfVxuICApO1xuICB9XG5cbiAgYWJvdXQoKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9hYm91dFwiXSk7XG4gIH1cbn0iXX0=