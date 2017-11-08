"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var textView;
var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: "list",
        moduleId: module.id,
        templateUrl: "./about.html",
        styleUrls: ["./about-common.css"]
    })
], AboutComponent);
exports.AboutComponent = AboutComponent;
//Need this to get sideDrawer working
// export function showSideDrawer(args: observable.EventData) {
//     console.log("Show SideDrawer tapped.");
//     // Show sidedrawer ...
// }

//textView.editable = false;
//#
