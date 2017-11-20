"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var AboutComponent = (function () {
    function AboutComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    AboutComponent.prototype.about = function () {
        this.routerExtensions.navigate(["/tab"]);
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: "tab",
        moduleId: module.id,
        templateUrl: "./tab.html",
        styleUrls: ["./tab-common.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], AboutComponent);
exports.AboutComponent = TabComponent;
//Code adapted from NativeScript and Angular tutorial for tabs
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBR3pFLHNEQUErRDtBQVUvRCxJQUFhLGNBQWM7SUFDekIsd0JBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRXRELENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxjQUFjO0lBUDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLGNBQWM7UUFDM0IsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDbEMsQ0FBQztxQ0FHc0MseUJBQWdCO0dBRDNDLGNBQWMsQ0FRMUI7QUFSWSx3Q0FBYztBQVUzQiw4REFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS90YWItdmlld1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9hYm91dC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2Fib3V0LWNvbW1vbi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgYWJvdXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2Fib3V0XCJdKTtcclxuICB9XHJcbn1cclxuXHJcbi8vQ29kZSBhZGFwdGVkIGZyb20gTmF0aXZlU2NyaXB0IGFuZCBBbmd1bGFyIHR1dG9yaWFsIGZvciB0YWJzXHJcbiJdfQ==
