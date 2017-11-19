"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var segmented_bar_1 = require("ui/segmented-bar");
var AboutComponent = (function () {
    function AboutComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.selectedIndex = 0;
        this.visibility1 = true;
        this.visibility2 = false;
        this.visibility3 = false;
        this.items = [];
        for (var i = 1; i < 4; i++) {
            var segmentedBarItem = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem.title = "View " + i;
            this.items.push(segmentedBarItem);
        }
        this.selectedIndex = 0;
    }
    AboutComponent.prototype.about = function () {
        this.routerExtensions.navigate(["/about"]);
    };
    AboutComponent.prototype.onSelectedIndexChange = function (args) {
        var segmetedBar = args.object;
        this.selectedIndex = segmetedBar.selectedIndex;
        switch (this.selectedIndex) {
            case 0:
                this.visibility1 = true;
                this.visibility2 = false;
                this.visibility3 = false;
                break;
            case 1:
                this.visibility1 = false;
                this.visibility2 = true;
                this.visibility3 = false;
                break;
            case 2:
                this.visibility1 = false;
                this.visibility2 = false;
                this.visibility3 = true;
                break;
            default:
                break;
        }
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: "list",
        moduleId: module.id,
        templateUrl: "./about.html",
        styleUrls: ["./about-common.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBR3pFLHNEQUErRDtBQUMvRCxrREFBa0U7QUFRbEUsSUFBYSxjQUFjO0lBT3pCLHdCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUwvQyxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUd6QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNaLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekIsSUFBSSxnQkFBZ0IsR0FBcUIsSUFBSSxnQ0FBZ0IsRUFBRSxDQUFDO1lBQ2hFLGdCQUFnQixDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFUCw4QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdNLDhDQUFxQixHQUE1QixVQUE2QixJQUFJO1FBQzdCLElBQUksV0FBVyxHQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMvQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekIsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQztZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixLQUFLLENBQUM7WUFDVjtnQkFDSSxLQUFLLENBQUM7UUFDWixDQUFDO0lBQ0wsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQztBQTlDWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLGNBQWM7UUFDM0IsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDbEMsQ0FBQztxQ0FRc0MseUJBQWdCO0dBUDNDLGNBQWMsQ0E4QzFCO0FBOUNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxpc3RcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWJvdXQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9hYm91dC1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XHJcbiAgcHVibGljIGl0ZW1zOiBBcnJheTxTZWdtZW50ZWRCYXJJdGVtPjtcclxuICBwdWJsaWMgc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgcHVibGljIHZpc2liaWxpdHkxID0gdHJ1ZTtcclxuICBwdWJsaWMgdmlzaWJpbGl0eTIgPSBmYWxzZTtcclxuICBwdWJsaWMgdmlzaWJpbGl0eTMgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHNlZ21lbnRlZEJhckl0ZW0gPSA8U2VnbWVudGVkQmFySXRlbT5uZXcgU2VnbWVudGVkQmFySXRlbSgpO1xyXG4gICAgICAgICAgICBzZWdtZW50ZWRCYXJJdGVtLnRpdGxlID0gXCJWaWV3IFwiICsgaTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHNlZ21lbnRlZEJhckl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gIGFib3V0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9hYm91dFwiXSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIG9uU2VsZWN0ZWRJbmRleENoYW5nZShhcmdzKSB7XHJcbiAgICAgIGxldCBzZWdtZXRlZEJhciA9IDxTZWdtZW50ZWRCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHNlZ21ldGVkQmFyLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZEluZGV4KSB7XHJcbiAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5MSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5MiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eTMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICB0aGlzLnZpc2liaWxpdHkxID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5MiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5MyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eTEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLnZpc2liaWxpdHkyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5MyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19