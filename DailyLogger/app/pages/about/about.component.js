"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var AboutComponent = (function () {
    function AboutComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
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
//Code adapted from NativeScript and Angular tutorial for tabs
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBR3pFLHNEQUErRDtBQVUvRCxJQUFhLGNBQWM7SUFDekIsd0JBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRXRELENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxjQUFjO0lBUDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLGNBQWM7UUFDM0IsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDbEMsQ0FBQztxQ0FHc0MseUJBQWdCO0dBRDNDLGNBQWMsQ0FRMUI7QUFSWSx3Q0FBYztBQVUzQiw4REFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS90YWItdmlld1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiYWJvdXRcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWJvdXQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9hYm91dC1jb21tb24uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG5cclxuICB9XHJcblxyXG4gIGFib3V0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9hYm91dFwiXSk7XHJcbiAgfVxyXG59XHJcblxyXG4vL0NvZGUgYWRhcHRlZCBmcm9tIE5hdGl2ZVNjcmlwdCBhbmQgQW5ndWxhciB0dXRvcmlhbCBmb3IgdGFic1xyXG4iXX0=