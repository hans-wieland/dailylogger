/**
 * This list component is the list page for the app.
 * Created by Zach.
 */
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
        this.exerciseList.push({ name: "Bench Press" });
        this.exerciseList.push({ name: "Back Squat" });
        this.exerciseList.push({ name: "Hang Clean" });
    };
    /**
     * This function pushes the list to firebase server
     */
    ListComponent.prototype.testPush = function () {
        alert("hello");
        firebase.push('/users', {
            'list': this.exerciseList
        }).then(function (result) {
            console.log("created key: " + result.key);
        });
    };
    /**
     * navigate to about page
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7OztBQUVILHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFDL0QsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFRekQsSUFBYSxhQUFhO0lBQ3hCLHVCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUd0RCxpQkFBWSxHQUFtQixFQUFFLENBQUM7SUFEbEMsQ0FBQztJQUdELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQ0FBUSxHQUFSO1FBQ0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsUUFBUSxDQUFDLElBQUksQ0FDWCxRQUFRLEVBQ1I7WUFDRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDMUIsQ0FDSixDQUFDLElBQUksQ0FDRixVQUFBLE1BQU07WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUNKLENBQUM7SUFDRixDQUFDO0lBRUQ7O09BRUc7SUFDSCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQW5DWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLGFBQWE7UUFDMUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO0tBQy9DLENBQUM7cUNBRXNDLHlCQUFnQjtHQUQzQyxhQUFhLENBbUN6QjtBQW5DWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBsaXN0IGNvbXBvbmVudCBpcyB0aGUgbGlzdCBwYWdlIGZvciB0aGUgYXBwLlxuICogQ3JlYXRlZCBieSBaYWNoLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9saXN0LWNvbW1vbi5jc3NcIiwgXCIuL2xpc3QuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcblxuICB9XG4gIGV4ZXJjaXNlTGlzdCA6IEFycmF5PE9iamVjdD4gPSBbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmV4ZXJjaXNlTGlzdC5wdXNoKHsgbmFtZTogXCJCZW5jaCBQcmVzc1wiIH0pO1xuICAgIHRoaXMuZXhlcmNpc2VMaXN0LnB1c2goeyBuYW1lOiBcIkJhY2sgU3F1YXRcIiB9KTtcbiAgICB0aGlzLmV4ZXJjaXNlTGlzdC5wdXNoKHsgbmFtZTogXCJIYW5nIENsZWFuXCIgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBwdXNoZXMgdGhlIGxpc3QgdG8gZmlyZWJhc2Ugc2VydmVyXG4gICAqL1xuICB0ZXN0UHVzaCgpIHtcbiAgICBhbGVydChcImhlbGxvXCIpO1xuICAgIGZpcmViYXNlLnB1c2goXG4gICAgICAnL3VzZXJzJyxcbiAgICAgIHtcbiAgICAgICAgJ2xpc3QnOiB0aGlzLmV4ZXJjaXNlTGlzdFxuICAgICAgfVxuICApLnRoZW4oXG4gICAgICByZXN1bHQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQga2V5OiBcIiArIHJlc3VsdC5rZXkpO1xuICAgICAgfVxuICApO1xuICB9XG5cbiAgLyoqXG4gICAqIG5hdmlnYXRlIHRvIGFib3V0IHBhZ2VcbiAgICovXG4gIGFib3V0KCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYWJvdXRcIl0pO1xuICB9XG59Il19