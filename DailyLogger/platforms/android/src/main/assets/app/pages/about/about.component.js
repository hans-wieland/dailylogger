"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var AboutComponent = (function () {
    function AboutComponent(routerExtensions, _changeDetectionRef) {
        this.routerExtensions = routerExtensions;
        this._changeDetectionRef = _changeDetectionRef;
        // List all pages here
        this.pages = [
            //{name:"Home"},
            //{name:"Contact"},
            { name: "About" }
        ];
    }
    AboutComponent.prototype.about = function () {
        this.routerExtensions.navigate(["/about"]);
    };
    AboutComponent.prototype.onTap = function () {
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    AboutComponent.prototype.openDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return AboutComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], AboutComponent.prototype, "drawerComponent", void 0);
AboutComponent = __decorate([
    core_1.Component({
        selector: "list",
        moduleId: module.id,
        templateUrl: "./about.html",
        styleUrls: ["./about-common.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions,
        core_1.ChangeDetectorRef])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRGO0FBRzVGLHNEQUErRDtBQUMvRCxrRUFBZ0c7QUFRaEcsSUFBYSxjQUFjO0lBS3pCLHdCQUFvQixnQkFBa0MsRUFDOUMsbUJBQXNDO1FBRDFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDOUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUM5QyxzQkFBc0I7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNWLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDO1NBQ2pCLENBQUM7SUFDRixDQUFDO0lBQ0QsOEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSw4QkFBSyxHQUFaO0lBRUEsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sbUNBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUdILHFCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQTlCQztJQURDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQ1YsZ0NBQXNCO3VEQUFDO0FBRnBDLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsY0FBYztRQUMzQixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUNsQyxDQUFDO3FDQU1zQyx5QkFBZ0I7UUFDekIsd0JBQWlCO0dBTm5DLGNBQWMsQ0FnQzFCO0FBaENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2Fib3V0Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vYWJvdXQtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudClcclxuICBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gIHByaXZhdGUgZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcclxuICBwdWJsaWMgcGFnZXM6QXJyYXk8T2JqZWN0PjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZil7XHJcbiAgLy8gTGlzdCBhbGwgcGFnZXMgaGVyZVxyXG4gICB0aGlzLnBhZ2VzID0gW1xyXG4gICAgICAvL3tuYW1lOlwiSG9tZVwifSxcclxuICAgICAgLy97bmFtZTpcIkNvbnRhY3RcIn0sXHJcbiAgICAgIHtuYW1lOlwiQWJvdXRcIn1cclxuICBdO1xyXG4gIH1cclxuICBhYm91dCgpIHtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYWJvdXRcIl0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVGFwKCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19