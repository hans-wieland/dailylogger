"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var ListComponent = (function () {
    function ListComponent() {
        this.exerciseList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.exerciseList.push({ name: "Apples" });
        this.exerciseList.push({ name: "Bananas" });
        this.exerciseList.push({ name: "Oranges" });
    };
    ListComponent.prototype.testPush = function () {
        alert("hello");
        firebase.push('/users', {
            'list': this.exerciseList
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQVF6RCxJQUFhLGFBQWE7SUFOMUI7UUFPRSxpQkFBWSxHQUFtQixFQUFFLENBQUM7SUFxQnBDLENBQUM7SUFuQkMsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsUUFBUSxDQUFDLElBQUksQ0FDWCxRQUFRLEVBQ1I7WUFDRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDMUIsQ0FDSixDQUFDLElBQUksQ0FDRixVQUFBLE1BQU07WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUNKLENBQUM7SUFDRixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsYUFBYTtRQUMxQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUM7S0FDL0MsQ0FBQztHQUNXLGFBQWEsQ0FzQnpCO0FBdEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xpc3QuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbGlzdC1jb21tb24uY3NzXCIsIFwiLi9saXN0LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZXhlcmNpc2VMaXN0IDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXhlcmNpc2VMaXN0LnB1c2goeyBuYW1lOiBcIkFwcGxlc1wiIH0pO1xuICAgIHRoaXMuZXhlcmNpc2VMaXN0LnB1c2goeyBuYW1lOiBcIkJhbmFuYXNcIiB9KTtcbiAgICB0aGlzLmV4ZXJjaXNlTGlzdC5wdXNoKHsgbmFtZTogXCJPcmFuZ2VzXCIgfSk7XG4gIH1cblxuICB0ZXN0UHVzaCgpIHtcbiAgICBhbGVydChcImhlbGxvXCIpO1xuICAgIGZpcmViYXNlLnB1c2goXG4gICAgICAnL3VzZXJzJyxcbiAgICAgIHtcbiAgICAgICAgJ2xpc3QnOiB0aGlzLmV4ZXJjaXNlTGlzdFxuICAgICAgfVxuICApLnRoZW4oXG4gICAgICByZXN1bHQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQga2V5OiBcIiArIHJlc3VsdC5rZXkpO1xuICAgICAgfVxuICApO1xuICB9XG59Il19