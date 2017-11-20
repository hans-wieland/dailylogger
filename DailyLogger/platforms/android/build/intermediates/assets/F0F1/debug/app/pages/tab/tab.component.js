"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Page needed to make tabs in the app.
 * Created by Anna, with help from the nativescript docs example
 */
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var TabComponent = (function () {
    function TabComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    TabComponent.prototype.tab = function () {
        this.routerExtensions.navigate(["/tab"]);
    };
    return TabComponent;
}());
TabComponent = __decorate([
    core_1.Component({
        selector: "tab",
        moduleId: module.id,
        templateUrl: "./tab.html",
        styleUrls: ["./tab-common.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], TabComponent);
exports.TabComponent = TabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7O0dBR0c7QUFDSCxzQ0FBeUU7QUFHekUsc0RBQStEO0FBVy9ELElBQWEsWUFBWTtJQUN2QixzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFdEQsQ0FBQztJQUVELDBCQUFHLEdBQUg7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLFlBQVk7SUFQeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxZQUFZO1FBQ3pCLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO0tBQ2hDLENBQUM7cUNBR3NDLHlCQUFnQjtHQUQzQyxZQUFZLENBUXhCO0FBUlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUGFnZSBuZWVkZWQgdG8gbWFrZSB0YWJzIGluIHRoZSBhcHAuIFxyXG4gKiBDcmVhdGVkIGJ5IEFubmEsIHdpdGggaGVscCBmcm9tIHRoZSBuYXRpdmVzY3JpcHQgZG9jcyBleGFtcGxlXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlld0l0ZW0gfSBmcm9tIFwidWkvdGFiLXZpZXdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInRhYlwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90YWIuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi90YWItY29tbW9uLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgdGFiKCkge1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90YWJcIl0pO1xyXG4gIH1cclxufSJdfQ==