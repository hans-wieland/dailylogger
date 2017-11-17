"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var user_1 = require("../../shared/user/user");
var page_1 = require("ui/page");
var color_1 = require("color");
var firebase = require("nativescript-plugin-firebase");
var dialogs = require("ui/dialogs");
var LoginComponent = (function () {
    function LoginComponent(routerExtensions, page) {
        this.routerExtensions = routerExtensions;
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
            _this.routerExtensions.navigate(["/list"], { clearHistory: true });
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
        this.routerExtensions.navigate(["/about"]);
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
    __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBRXpFLHNEQUE2RDtBQUM3RCwrQ0FBOEM7QUFDOUMsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUU5QixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxvQ0FBc0M7QUFRdEMsSUFBYSxjQUFjO0lBS3pCLHdCQUFvQixnQkFBa0MsRUFBVSxJQUFVO1FBQXRELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSDFFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBSWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7SUFDdEMsQ0FBQztJQUVELHdDQUF3QztJQUN4QywrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQseUVBQXlFO0lBQ3pFLHlFQUF5RTtJQUN6RSw2QkFBNkI7SUFDN0IsOEJBQUssR0FBTDtRQUFBLGlCQWtCQztRQWpCQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTthQUM3QjtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQSxNQUFNO1lBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQ0QsVUFBQSxZQUFZO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixLQUFLLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FDSixDQUFDO0lBQ0YsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSw0RUFBNEU7SUFDNUUscUNBQXFDO0lBQ3JDLG9FQUFvRTtJQUNwRSxtRUFBbUU7SUFDbkUsdUNBQXVDO0lBQ3ZDLCtCQUFNLEdBQU47UUFDRSxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtTQUM3QixDQUFDLENBQUMsSUFBSSxDQUNILFVBQUEsTUFBTTtZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1osS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLE9BQU8sRUFBRSxzQ0FBc0MsR0FBRyxNQUFNLENBQUMsR0FBRztnQkFDNUQsWUFBWSxFQUFFLE9BQU87YUFDdEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxFQUNELFVBQUEsWUFBWTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1osS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLFlBQVksRUFBRSxZQUFZO2FBQzNCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUVELDRDQUE0QztJQUM1QyxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNoQixlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUM7WUFDMUUsUUFBUSxFQUFFLEdBQUc7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF2RkQsSUF1RkM7QUFwRnlCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO2lEQUFDO0FBSG5DLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsWUFBWTtRQUN6QixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUM7S0FDN0MsQ0FBQztxQ0FNc0MseUJBQWdCLEVBQWdCLFdBQUk7R0FML0QsY0FBYyxDQXVGMUI7QUF2Rlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCJsb2dpbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wibG9naW4tY29tbW9uLmNzc1wiLCBcImxvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVzZXI6IFVzZXI7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgfVxuXG4gIC8vIENoYW5nZXMgdGhlIGJ1dHRvbiBmcm9tIHNpZ25pbi9zaWdudXBcbiAgc3VibWl0KCkge1xuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICB0aGlzLmxvZ2luKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxuICB9XG4gIFxuICAvLyBUaGlzIGlzIGEgbG9naW4gZnVuY3Rpb24gd2l0aCBmaXJlYmFzZS4gV2hlbiBzdWNjZXNzZnVsbHkgbG9nZ2VkIGluIGl0XG4gIC8vIHdpbGwgbW92ZSB5b3UgdG8gdGhlIG5leHQgcGFnZS4gSWYgdGhlIGxvZ2luIGZhaWxlZCBpdCB3aWxsIHByaW50IHRoZSBcbiAgLy8gZXJyb3IgbWVzc2FnZSBpbiBhbiBhbGVydC5cbiAgbG9naW4oKSB7XG4gICAgZmlyZWJhc2UubG9naW4oe1xuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XG4gICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcbiAgICAgIH1cbiAgICB9KS50aGVuKFxuICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgYWxlcnQoXCJMb2dpbiBTdWNjZXNmdWwhXCIpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xpc3RcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yTWVzc2FnZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIGFsZXJ0KFwiTG9naW4gRXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgKTtcbiAgfVxuICBcbiAgLy8gVGhpcyBpcyB0aGUgc2lnbiB1cCBmdW5jdGlvbiB0aGF0IHdpbGwgcmVnaXN0ZXIgYW4gYWNjb3VudCB3aXRoIGZpcmViYXNlLiBcbiAgLy8gSXQgd2lsbCBhbGVydCB5b3VyIHVpZCBub3cgd2hlbiBzdWNjZXNzZnVsbC4gVE9ETzogYWxlcnQgc29tZXRoaW5nIHVzZWZ1bFxuICAvLyBJZiBmYWlsZWQgaXQgd2lsbCBhbGVydCB0aGUgZXJyb3IuXG4gIC8vIEFzIG9mIHJpZ2h0IG5vdyBvbmx5IGVtYWlsIGFuZCBwYXNzd29yZCBhcmUgbmVlZGVkIGZvciBhIHByb2ZpbGUuXG4gIC8vIFRPRE86IG1ha2UgdXBkYXRlIHByb2ZpbGUgcGFnZSB0byBpbmNsdWRlIG5hbWUsIHByb2ZpbGUgcGljdHVyZS5cbiAgLy8gVE9ETzogaW1wbGVtZW50IGVtYWlsIHZlcmlmaWNhdGlvbi4gXG4gIHNpZ25VcCgpIHtcbiAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcbiAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkXG4gICAgfSkudGhlbihcbiAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlVzZXIgY3JlYXRlZFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJVc2VyIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIVxcbnVzZXJpZDogXCIgKyByZXN1bHQua2V5LFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk5pY2UhXCJcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2UgPT4ge1xuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiTm8gdXNlciBjcmVhdGVkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0ssIGdvdCBpdFwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICk7XG4gIH1cbiAgXG4gIC8vIFRvZ2dsZXMgZGlzcGxheSBmb3Igc2lnbmluL3NpZ251cCBidXR0b24uXG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgIGxldCBjb250YWluZXIgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnRhaW5lci5hbmltYXRlKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc0xvZ2dpbmdJbiA/IG5ldyBDb2xvcihcIndoaXRlXCIpIDogbmV3IENvbG9yKFwiZ3JheVwiKSxcbiAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9KTtcbiAgfVxuXG4gIGFib3V0KCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYWJvdXRcIl0pO1xuICB9XG59Il19