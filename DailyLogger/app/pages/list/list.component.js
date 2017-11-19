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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFDL0QsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFRekQsSUFBYSxhQUFhO0lBQ3hCLHVCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUd0RCxpQkFBWSxHQUFtQixFQUFFLENBQUM7SUFEbEMsQ0FBQztJQUdELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLFFBQVEsQ0FBQyxJQUFJLENBQ1gsUUFBUSxFQUNSO1lBQ0UsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQzFCLENBQ0osQ0FBQyxJQUFJLENBQ0YsVUFBQSxNQUFNO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FDSixDQUFDO0lBQ0YsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsYUFBYTtRQUMxQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUM7S0FDL0MsQ0FBQztxQ0FFc0MseUJBQWdCO0dBRDNDLGFBQWEsQ0E2QnpCO0FBN0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2xpc3QuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9saXN0LWNvbW1vbi5jc3NcIiwgXCIuL2xpc3QuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuXHJcbiAgfVxyXG4gIGV4ZXJjaXNlTGlzdCA6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmV4ZXJjaXNlTGlzdC5wdXNoKHsgbmFtZTogXCJBcHBsZXNcIiB9KTtcclxuICAgIHRoaXMuZXhlcmNpc2VMaXN0LnB1c2goeyBuYW1lOiBcIkJhbmFuYXNcIiB9KTtcclxuICAgIHRoaXMuZXhlcmNpc2VMaXN0LnB1c2goeyBuYW1lOiBcIk9yYW5nZXNcIiB9KTtcclxuICB9XHJcblxyXG4gIHRlc3RQdXNoKCkge1xyXG4gICAgYWxlcnQoXCJoZWxsb1wiKTtcclxuICAgIGZpcmViYXNlLnB1c2goXHJcbiAgICAgICcvdXNlcnMnLFxyXG4gICAgICB7XHJcbiAgICAgICAgJ2xpc3QnOiB0aGlzLmV4ZXJjaXNlTGlzdFxyXG4gICAgICB9XHJcbiAgKS50aGVuKFxyXG4gICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlZCBrZXk6IFwiICsgcmVzdWx0LmtleSk7XHJcbiAgICAgIH1cclxuICApO1xyXG4gIH1cclxuXHJcbiAgYWJvdXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2Fib3V0XCJdKTtcclxuICB9XHJcbn0iXX0=