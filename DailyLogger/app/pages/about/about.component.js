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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBR3pFLHNEQUErRDtBQUMvRCxrREFBa0U7QUFTbEUsSUFBYSxjQUFjO0lBT3pCLHdCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUwvQyxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUd6QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNaLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekIsSUFBSSxnQkFBZ0IsR0FBcUIsSUFBSSxnQ0FBZ0IsRUFBRSxDQUFDO1lBQ2hFLGdCQUFnQixDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFUCw4QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdNLDhDQUFxQixHQUE1QixVQUE2QixJQUFJO1FBQzdCLElBQUksV0FBVyxHQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMvQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekIsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQztZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixLQUFLLENBQUM7WUFDVjtnQkFDSSxLQUFLLENBQUM7UUFDWixDQUFDO0lBQ0wsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQztBQTlDWSxjQUFjO0lBUDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLGNBQWM7UUFDM0IsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDbEMsQ0FBQztxQ0FTc0MseUJBQWdCO0dBUDNDLGNBQWMsQ0E4QzFCO0FBOUNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxpc3RcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWJvdXQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9hYm91dC1jb21tb24uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xyXG4gIHB1YmxpYyBpdGVtczogQXJyYXk8U2VnbWVudGVkQmFySXRlbT47XHJcbiAgcHVibGljIHNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIHB1YmxpYyB2aXNpYmlsaXR5MSA9IHRydWU7XHJcbiAgcHVibGljIHZpc2liaWxpdHkyID0gZmFsc2U7XHJcbiAgcHVibGljIHZpc2liaWxpdHkzID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWdtZW50ZWRCYXJJdGVtID0gPFNlZ21lbnRlZEJhckl0ZW0+bmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcclxuICAgICAgICAgICAgc2VnbWVudGVkQmFySXRlbS50aXRsZSA9IFwiVmlldyBcIiArIGk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChzZWdtZW50ZWRCYXJJdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICBhYm91dCgpIHtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYWJvdXRcIl0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBvblNlbGVjdGVkSW5kZXhDaGFuZ2UoYXJncykge1xyXG4gICAgICBsZXQgc2VnbWV0ZWRCYXIgPSA8U2VnbWVudGVkQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBzZWdtZXRlZEJhci5zZWxlY3RlZEluZGV4O1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eTEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eTIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLnZpc2liaWxpdHkzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5MSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eTIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eTMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICB0aGlzLnZpc2liaWxpdHkxID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5MiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eTMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==