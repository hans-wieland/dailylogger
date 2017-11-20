/**
 * This list component is the list page for the app.
 * Created by Zach.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var firebase = require("nativescript-plugin-firebase");
var ListComponent = (function () {
    function ListComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.exerciseList = [];
    }
    /* Creates the text for the list items */
    ListComponent.prototype.ngOnInit = function () {
        this.exerciseList.push({ name: "Bench Press" });
        this.exerciseList.push({ name: "Back Squat" });
        this.exerciseList.push({ name: "Hang Clean" });
    };
    /**
     * This function pushes the list to firebase server
     */
    ListComponent.prototype.testPush = function () {
        alert("hello");
        firebase.push('/users', {
            'list': this.exerciseList
        }).then(function (result) {
            console.log("created key: " + result.key);
        });
    };
    /**
     * navigate to about page
     */
    ListComponent.prototype.about = function () {
        this.routerExtensions.navigate(["/about"]);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        moduleId: module.id,
        templateUrl: "./list.html",
        styleUrls: ["./list-common.css", "./list.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7OztBQUVILHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFFL0QsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFRekQsSUFBYSxhQUFhO0lBQ3hCLHVCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUd0RCxpQkFBWSxHQUFtQixFQUFFLENBQUM7SUFEbEMsQ0FBQztJQUdELHlDQUF5QztJQUN6QyxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0NBQVEsR0FBUjtRQUNFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLFFBQVEsQ0FBQyxJQUFJLENBQ1gsUUFBUSxFQUNSO1lBQ0UsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQzFCLENBQ0osQ0FBQyxJQUFJLENBQ0YsVUFBQSxNQUFNO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FDSixDQUFDO0lBQ0YsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNkJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7QUFwQ1ksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQztLQUMvQyxDQUFDO3FDQUVzQyx5QkFBZ0I7R0FEM0MsYUFBYSxDQW9DekI7QUFwQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgbGlzdCBjb21wb25lbnQgaXMgdGhlIGxpc3QgcGFnZSBmb3IgdGhlIGFwcC5cbiAqIENyZWF0ZWQgYnkgWmFjaC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9saXN0Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2xpc3QtY29tbW9uLmNzc1wiLCBcIi4vbGlzdC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuXG4gIH1cbiAgZXhlcmNpc2VMaXN0IDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuXG4gIC8qIENyZWF0ZXMgdGhlIHRleHQgZm9yIHRoZSBsaXN0IGl0ZW1zICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXhlcmNpc2VMaXN0LnB1c2goeyBuYW1lOiBcIkJlbmNoIFByZXNzXCIgfSk7XG4gICAgdGhpcy5leGVyY2lzZUxpc3QucHVzaCh7IG5hbWU6IFwiQmFjayBTcXVhdFwiIH0pO1xuICAgIHRoaXMuZXhlcmNpc2VMaXN0LnB1c2goeyBuYW1lOiBcIkhhbmcgQ2xlYW5cIiB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHB1c2hlcyB0aGUgbGlzdCB0byBmaXJlYmFzZSBzZXJ2ZXJcbiAgICovXG4gIHRlc3RQdXNoKCkge1xuICAgIGFsZXJ0KFwiaGVsbG9cIik7XG4gICAgZmlyZWJhc2UucHVzaChcbiAgICAgICcvdXNlcnMnLFxuICAgICAge1xuICAgICAgICAnbGlzdCc6IHRoaXMuZXhlcmNpc2VMaXN0XG4gICAgICB9XG4gICkudGhlbihcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlZCBrZXk6IFwiICsgcmVzdWx0LmtleSk7XG4gICAgICB9XG4gICk7XG4gIH1cblxuICAvKipcbiAgICogbmF2aWdhdGUgdG8gYWJvdXQgcGFnZVxuICAgKi9cbiAgYWJvdXQoKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9hYm91dFwiXSk7XG4gIH1cbn1cbiJdfQ==