"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var page_1 = require("ui/page");
var color_1 = require("color");
var firebase = require("nativescript-plugin-firebase");
var dialogs = require("ui/dialogs");
var LoginComponent = (function () {
    function LoginComponent(router, page) {
        this.router = router;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundColor = "white";
    };
    // Changes the button from signin/signup
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    // This is a login function with firebase. When successfully logged in it
    // will move you to the next page. If the login failed it will print the 
    // error message in an alert.
    LoginComponent.prototype.login = function () {
        var _this = this;
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: this.user.email,
                password: this.user.password
            }
        }).then(function (result) {
            JSON.stringify(result);
            alert("Login Succesful!");
            _this.router.navigate(["/list"]);
        }, function (errorMessage) {
            console.log(errorMessage);
            alert("Login Error: " + errorMessage);
        });
    };
    // This is the sign up function that will register an account with firebase. 
    // It will alert your uid now when successfull. TODO: alert something useful
    // If failed it will alert the error.
    // As of right now only email and password are needed for a profile.
    // TODO: make update profile page to include name, profile picture.
    // TODO: implement email verification. 
    LoginComponent.prototype.signUp = function () {
        firebase.createUser({
            email: this.user.email,
            password: this.user.password
        }).then(function (result) {
            dialogs.alert({
                title: "User created",
                message: "User successfully created!\nuserid: " + result.key,
                okButtonText: "Nice!"
            });
        }, function (errorMessage) {
            dialogs.alert({
                title: "No user created",
                message: errorMessage,
                okButtonText: "OK, got it"
            });
        });
    };
    // Toggles display for signin/signup button.
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("gray"),
            duration: 200
        });
    };
    LoginComponent.prototype.about = function () {
        this.router.navigate(["/about"]);
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        moduleId: module.id,
        templateUrl: "login.html",
        styleUrls: ["login-common.css", "login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUN6QywrQ0FBOEM7QUFDOUMsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUU5QixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxvQ0FBc0M7QUFRdEMsSUFBYSxjQUFjO0lBS3pCLHdCQUFvQixNQUFjLEVBQVUsSUFBVTtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUh0RCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUlqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx3Q0FBd0M7SUFDeEMsK0JBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsNkJBQTZCO0lBQzdCLDhCQUFLLEdBQUw7UUFBQSxpQkFrQkM7UUFqQkMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNiLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7YUFDN0I7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLFVBQUEsTUFBTTtZQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFDRCxVQUFBLFlBQVk7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLEtBQUssQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUNKLENBQUM7SUFDRixDQUFDO0lBRUQsNkVBQTZFO0lBQzdFLDRFQUE0RTtJQUM1RSxxQ0FBcUM7SUFDckMsb0VBQW9FO0lBQ3BFLG1FQUFtRTtJQUNuRSx1Q0FBdUM7SUFDdkMsK0JBQU0sR0FBTjtRQUNFLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQzdCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxNQUFNO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDWixLQUFLLEVBQUUsY0FBYztnQkFDckIsT0FBTyxFQUFFLHNDQUFzQyxHQUFHLE1BQU0sQ0FBQyxHQUFHO2dCQUM1RCxZQUFZLEVBQUUsT0FBTzthQUN0QixDQUFDLENBQUE7UUFDSixDQUFDLEVBQ0QsVUFBQSxZQUFZO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDWixLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixPQUFPLEVBQUUsWUFBWTtnQkFDckIsWUFBWSxFQUFFLFlBQVk7YUFDM0IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRUQsNENBQTRDO0lBQzVDLHNDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLFNBQVMsR0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUNuRCxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ2hCLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksYUFBSyxDQUFDLE1BQU0sQ0FBQztZQUMxRSxRQUFRLEVBQUUsR0FBRztTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF2RkQsSUF1RkM7QUFwRnlCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO2lEQUFDO0FBSG5DLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsWUFBWTtRQUN6QixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUM7S0FDN0MsQ0FBQztxQ0FNNEIsZUFBTSxFQUFnQixXQUFJO0dBTDNDLGNBQWMsQ0F1RjFCO0FBdkZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcImxvZ2luLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJsb2dpbi1jb21tb24uY3NzXCIsIFwibG9naW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXNlcjogVXNlcjtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgfVxuXG4gIC8vIENoYW5nZXMgdGhlIGJ1dHRvbiBmcm9tIHNpZ25pbi9zaWdudXBcbiAgc3VibWl0KCkge1xuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICB0aGlzLmxvZ2luKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxuICB9XG4gIFxuICAvLyBUaGlzIGlzIGEgbG9naW4gZnVuY3Rpb24gd2l0aCBmaXJlYmFzZS4gV2hlbiBzdWNjZXNzZnVsbHkgbG9nZ2VkIGluIGl0XG4gIC8vIHdpbGwgbW92ZSB5b3UgdG8gdGhlIG5leHQgcGFnZS4gSWYgdGhlIGxvZ2luIGZhaWxlZCBpdCB3aWxsIHByaW50IHRoZSBcbiAgLy8gZXJyb3IgbWVzc2FnZSBpbiBhbiBhbGVydC5cbiAgbG9naW4oKSB7XG4gICAgZmlyZWJhc2UubG9naW4oe1xuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XG4gICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcbiAgICAgIH1cbiAgICB9KS50aGVuKFxuICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgYWxlcnQoXCJMb2dpbiBTdWNjZXNmdWwhXCIpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSk7XG4gICAgICB9LFxuICAgICAgZXJyb3JNZXNzYWdlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgYWxlcnQoXCJMb2dpbiBFcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuICApO1xuICB9XG4gIFxuICAvLyBUaGlzIGlzIHRoZSBzaWduIHVwIGZ1bmN0aW9uIHRoYXQgd2lsbCByZWdpc3RlciBhbiBhY2NvdW50IHdpdGggZmlyZWJhc2UuIFxuICAvLyBJdCB3aWxsIGFsZXJ0IHlvdXIgdWlkIG5vdyB3aGVuIHN1Y2Nlc3NmdWxsLiBUT0RPOiBhbGVydCBzb21ldGhpbmcgdXNlZnVsXG4gIC8vIElmIGZhaWxlZCBpdCB3aWxsIGFsZXJ0IHRoZSBlcnJvci5cbiAgLy8gQXMgb2YgcmlnaHQgbm93IG9ubHkgZW1haWwgYW5kIHBhc3N3b3JkIGFyZSBuZWVkZWQgZm9yIGEgcHJvZmlsZS5cbiAgLy8gVE9ETzogbWFrZSB1cGRhdGUgcHJvZmlsZSBwYWdlIHRvIGluY2x1ZGUgbmFtZSwgcHJvZmlsZSBwaWN0dXJlLlxuICAvLyBUT0RPOiBpbXBsZW1lbnQgZW1haWwgdmVyaWZpY2F0aW9uLiBcbiAgc2lnblVwKCkge1xuICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcbiAgICB9KS50aGVuKFxuICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBjcmVhdGVkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlVzZXIgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQhXFxudXNlcmlkOiBcIiArIHJlc3VsdC5rZXksXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiTmljZSFcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZSA9PiB7XG4gICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJObyB1c2VyIGNyZWF0ZWRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgZ290IGl0XCJcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgKTtcbiAgfVxuICBcbiAgLy8gVG9nZ2xlcyBkaXNwbGF5IGZvciBzaWduaW4vc2lnbnVwIGJ1dHRvbi5cbiAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgbGV0IGNvbnRhaW5lciA9IDxWaWV3PnRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29udGFpbmVyLmFuaW1hdGUoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKFwid2hpdGVcIikgOiBuZXcgQ29sb3IoXCJncmF5XCIpLFxuICAgICAgZHVyYXRpb246IDIwMFxuICAgIH0pO1xuICB9XG5cbiAgYWJvdXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2Fib3V0XCJdKTtcbiAgfVxufSJdfQ==