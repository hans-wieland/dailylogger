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
                message: "userid: " + result.key,
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
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUN6QywrQ0FBOEM7QUFDOUMsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUU5QixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxvQ0FBc0M7QUFRdEMsSUFBYSxjQUFjO0lBS3pCLHdCQUFvQixNQUFjLEVBQVUsSUFBVTtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUh0RCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUlqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx3Q0FBd0M7SUFDeEMsK0JBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsNkJBQTZCO0lBQzdCLDhCQUFLLEdBQUw7UUFBQSxpQkFrQkM7UUFqQkMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNiLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7YUFDN0I7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLFVBQUEsTUFBTTtZQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFDRCxVQUFBLFlBQVk7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLEtBQUssQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUNKLENBQUM7SUFDRixDQUFDO0lBRUQsNkVBQTZFO0lBQzdFLDRFQUE0RTtJQUM1RSxxQ0FBcUM7SUFDckMsb0VBQW9FO0lBQ3BFLG1FQUFtRTtJQUNuRSx1Q0FBdUM7SUFDdkMsK0JBQU0sR0FBTjtRQUNFLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQzdCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxNQUFNO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDWixLQUFLLEVBQUUsY0FBYztnQkFDckIsT0FBTyxFQUFFLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRztnQkFDaEMsWUFBWSxFQUFFLE9BQU87YUFDdEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxFQUNELFVBQUEsWUFBWTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1osS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLFlBQVksRUFBRSxZQUFZO2FBQzNCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUVELDRDQUE0QztJQUM1QyxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNoQixlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUM7WUFDN0UsUUFBUSxFQUFFLEdBQUc7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBdkZELElBdUZDO0FBcEZ5QjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBWSxpQkFBVTtpREFBQztBQUhuQyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLFlBQVk7UUFDekIsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDO0tBQzdDLENBQUM7cUNBTTRCLGVBQU0sRUFBZ0IsV0FBSTtHQUwzQyxjQUFjLENBdUYxQjtBQXZGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCJsb2dpbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wibG9naW4tY29tbW9uLmNzc1wiLCBcImxvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVzZXI6IFVzZXI7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gIH1cblxuICAvLyBDaGFuZ2VzIHRoZSBidXR0b24gZnJvbSBzaWduaW4vc2lnbnVwXG4gIHN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpZ25VcCgpO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gVGhpcyBpcyBhIGxvZ2luIGZ1bmN0aW9uIHdpdGggZmlyZWJhc2UuIFdoZW4gc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiBpdFxuICAvLyB3aWxsIG1vdmUgeW91IHRvIHRoZSBuZXh0IHBhZ2UuIElmIHRoZSBsb2dpbiBmYWlsZWQgaXQgd2lsbCBwcmludCB0aGUgXG4gIC8vIGVycm9yIG1lc3NhZ2UgaW4gYW4gYWxlcnQuXG4gIGxvZ2luKCkge1xuICAgIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcbiAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xuICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkXG4gICAgICB9XG4gICAgfSkudGhlbihcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgIGFsZXJ0KFwiTG9naW4gU3VjY2VzZnVsIVwiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yTWVzc2FnZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIGFsZXJ0KFwiTG9naW4gRXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgKTtcbiAgfVxuICBcbiAgLy8gVGhpcyBpcyB0aGUgc2lnbiB1cCBmdW5jdGlvbiB0aGF0IHdpbGwgcmVnaXN0ZXIgYW4gYWNjb3VudCB3aXRoIGZpcmViYXNlLiBcbiAgLy8gSXQgd2lsbCBhbGVydCB5b3VyIHVpZCBub3cgd2hlbiBzdWNjZXNzZnVsbC4gVE9ETzogYWxlcnQgc29tZXRoaW5nIHVzZWZ1bFxuICAvLyBJZiBmYWlsZWQgaXQgd2lsbCBhbGVydCB0aGUgZXJyb3IuXG4gIC8vIEFzIG9mIHJpZ2h0IG5vdyBvbmx5IGVtYWlsIGFuZCBwYXNzd29yZCBhcmUgbmVlZGVkIGZvciBhIHByb2ZpbGUuXG4gIC8vIFRPRE86IG1ha2UgdXBkYXRlIHByb2ZpbGUgcGFnZSB0byBpbmNsdWRlIG5hbWUsIHByb2ZpbGUgcGljdHVyZS5cbiAgLy8gVE9ETzogaW1wbGVtZW50IGVtYWlsIHZlcmlmaWNhdGlvbi4gXG4gIHNpZ25VcCgpIHtcbiAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcbiAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkXG4gICAgfSkudGhlbihcbiAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlVzZXIgY3JlYXRlZFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJ1c2VyaWQ6IFwiICsgcmVzdWx0LmtleSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJOaWNlIVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlID0+IHtcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vIHVzZXIgY3JlYXRlZFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LLCBnb3QgaXRcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICApO1xuICB9XG4gIFxuICAvLyBUb2dnbGVzIGRpc3BsYXkgZm9yIHNpZ25pbi9zaWdudXAgYnV0dG9uLlxuICB0b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBjb250YWluZXIuYW5pbWF0ZSh7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuaXNMb2dnaW5nSW4gPyBuZXcgQ29sb3IoXCJ3aGl0ZVwiKSA6IG5ldyBDb2xvcihcIiMzMDEyMTdcIiksXG4gICAgICBkdXJhdGlvbjogMjAwXG4gICAgfSk7XG4gIH1cblxuICBhYm91dCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWJvdXRcIl0pO1xuICB9XG59Il19