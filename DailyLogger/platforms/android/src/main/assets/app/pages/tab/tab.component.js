"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//Code adapted from NativeScript and Angular tutorial for tabs
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFHekUsc0RBQStEO0FBVy9ELElBQWEsWUFBWTtJQUN2QixzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFdEQsQ0FBQztJQUVELDBCQUFHLEdBQUg7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLFlBQVk7SUFQeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxZQUFZO1FBQ3pCLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO0tBQ2hDLENBQUM7cUNBR3NDLHlCQUFnQjtHQUQzQyxZQUFZLENBUXhCO0FBUlksb0NBQVk7QUFVekIsOERBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgVGFiVmlldywgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFRhYlZpZXdJdGVtIH0gZnJvbSBcInVpL3RhYi12aWV3XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ0YWJcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGFiLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vdGFiLWNvbW1vbi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG5cclxuICB9XHJcblxyXG4gIHRhYigpIHtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGFiXCJdKTtcclxuICB9XHJcbn1cclxuXHJcbi8vQ29kZSBhZGFwdGVkIGZyb20gTmF0aXZlU2NyaXB0IGFuZCBBbmd1bGFyIHR1dG9yaWFsIGZvciB0YWJzXHJcbiJdfQ==