"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var ListComponent = (function () {
    function ListComponent() {
        this.groceryList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.groceryList.push({ name: "Apples" });
        this.groceryList.push({ name: "Bananas" });
        this.groceryList.push({ name: "Oranges" });
    };
    ListComponent.prototype.testPush = function () {
        alert("hello");
        firebase.push('/users', {
            'list': this.groceryList
        }).then(function (result) {
            console.log("created key: " + result.key);
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        moduleId: module.id,
        templateUrl: "./list.html",
        styleUrls: ["./list-common.css", "./list.css"]
    })
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQVF6RCxJQUFhLGFBQWE7SUFOMUI7UUFPRSxnQkFBVyxHQUFrQixFQUFFLENBQUM7SUFxQmxDLENBQUM7SUFuQkMsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsUUFBUSxDQUFDLElBQUksQ0FDWCxRQUFRLEVBQ1I7WUFDRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDekIsQ0FDSixDQUFDLElBQUksQ0FDRixVQUFVLE1BQU07WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUNKLENBQUM7SUFDRixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsYUFBYTtRQUMxQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUM7S0FDL0MsQ0FBQztHQUNXLGFBQWEsQ0FzQnpCO0FBdEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2xpc3QuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9saXN0LWNvbW1vbi5jc3NcIiwgXCIuL2xpc3QuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBncm9jZXJ5TGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7IG5hbWU6IFwiQXBwbGVzXCIgfSk7XHJcbiAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBuYW1lOiBcIkJhbmFuYXNcIiB9KTtcclxuICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7IG5hbWU6IFwiT3Jhbmdlc1wiIH0pO1xyXG4gIH1cclxuXHJcbiAgdGVzdFB1c2goKSB7XHJcbiAgICBhbGVydChcImhlbGxvXCIpO1xyXG4gICAgZmlyZWJhc2UucHVzaChcclxuICAgICAgJy91c2VycycsXHJcbiAgICAgIHtcclxuICAgICAgICAnbGlzdCc6IHRoaXMuZ3JvY2VyeUxpc3QgXHJcbiAgICAgIH1cclxuICApLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQga2V5OiBcIiArIHJlc3VsdC5rZXkpO1xyXG4gICAgICB9XHJcbiAgKTtcclxuICB9XHJcbn0iXX0=