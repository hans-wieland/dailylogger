"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is the about component. This file initalized the page for our about page
 * most of this is just text so this file will be pretty empty.
 * This page was created by Anna.
 */
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var AboutComponent = (function () {
    function AboutComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    /**
     * navigate to about page. No longer needed
     */
    AboutComponent.prototype.about = function () {
        this.routerExtensions.navigate(["/about"]);
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: "about",
        moduleId: module.id,
        templateUrl: "./about.html",
        styleUrls: ["./about-common.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7R0FJRztBQUNILHNDQUF5RTtBQUd6RSxzREFBK0Q7QUFRL0QsSUFBYSxjQUFjO0lBQ3pCLHdCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUV2RCxDQUFDO0lBQ0Q7O09BRUc7SUFDRiw4QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLGNBQWM7UUFDM0IsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDbEMsQ0FBQztxQ0FFc0MseUJBQWdCO0dBRDNDLGNBQWMsQ0FVMUI7QUFWWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBhYm91dCBjb21wb25lbnQuIFRoaXMgZmlsZSBpbml0YWxpemVkIHRoZSBwYWdlIGZvciBvdXIgYWJvdXQgcGFnZVxyXG4gKiBtb3N0IG9mIHRoaXMgaXMganVzdCB0ZXh0IHNvIHRoaXMgZmlsZSB3aWxsIGJlIHByZXR0eSBlbXB0eS5cclxuICogVGhpcyBwYWdlIHdhcyBjcmVhdGVkIGJ5IEFubmEuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiYWJvdXRcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWJvdXQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9hYm91dC1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcblxyXG4gfVxyXG4gLyoqXHJcbiAgKiBuYXZpZ2F0ZSB0byBhYm91dCBwYWdlLiBObyBsb25nZXIgbmVlZGVkXHJcbiAgKi9cclxuICBhYm91dCgpIHtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYWJvdXRcIl0pO1xyXG4gIH1cclxufSJdfQ==