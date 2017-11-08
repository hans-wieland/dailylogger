"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
//Use to keep the text from being editable
var BasicTextViewComponent = (function () {
    function BasicTextViewComponent() {
        this.editState = false;
    }
    return BasicTextViewComponent;
}());
exports.BasicTextViewComponent = BasicTextViewComponent;
//Need this to get sideDrawer working
// export function showSideDrawer(args: observable.EventData) {
//     console.log("Show SideDrawer tapped.");
//     // Show sidedrawer ...
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBVXpFLElBQWEsY0FBYztJQUEzQjtJQUE2QixDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBQTlCLElBQThCO0FBQWpCLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsY0FBYztRQUMzQixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUNsQyxDQUFDO0dBQ1csY0FBYyxDQUFHO0FBQWpCLHdDQUFjO0FBRTNCLDBDQUEwQztBQUMxQztJQUFBO1FBRVcsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQUQsNkJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLHdEQUFzQjtBQUtuQyxxQ0FBcUM7QUFDckMsK0RBQStEO0FBQy9ELDhDQUE4QztBQUM5Qyw2QkFBNkI7QUFDN0IsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2Fib3V0Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vYWJvdXQtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge31cclxuXHJcbi8vVXNlIHRvIGtlZXAgdGhlIHRleHQgZnJvbSBiZWluZyBlZGl0YWJsZVxyXG5leHBvcnQgY2xhc3MgQmFzaWNUZXh0Vmlld0NvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGVkaXRTdGF0ZSA9IGZhbHNlO1xyXG59XHJcblxyXG4vL05lZWQgdGhpcyB0byBnZXQgc2lkZURyYXdlciB3b3JraW5nXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBzaG93U2lkZURyYXdlcihhcmdzOiBvYnNlcnZhYmxlLkV2ZW50RGF0YSkge1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJTaG93IFNpZGVEcmF3ZXIgdGFwcGVkLlwiKTtcclxuLy8gICAgIC8vIFNob3cgc2lkZWRyYXdlciAuLi5cclxuLy8gfVxyXG4iXX0=