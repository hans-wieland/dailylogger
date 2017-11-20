/**
 * This ts file is for the login page.
 * Author: Zach LeBlanc
 * Date: 2017-11-17
 */
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
    /**
     * The constructor for this file.
     *
     * @param routerExtensions
     * @param page
     */
    function LoginComponent(routerExtensions, page) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
    }
    /**
     * initalized the page with some attributes
     */
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
            _this.routerExtensions.navigate(["/list"], { clearHistory: true });
        }, function (errorMessage) {
            console.log(errorMessage);
            alert("There was an error logging in:\nPlease make sure your email/password is correct.");
        });
    };
    // This is the sign up function that will register an account with firebase. 
    // It will alert your uid now when successfull. 
    // If failed it will alert the error.
    // As of right now only email and password are needed for a profile.
    // TODO: implement email verification. 
    LoginComponent.prototype.signUp = function () {
        firebase.createUser({
            email: this.user.email,
            password: this.user.password
        }).then(function (result) {
            dialogs.alert({
                title: "User created",
                message: "User successfully created!\n",
                okButtonText: "Nice!"
            });
        }, function (errorMessage) {
            dialogs.alert({
                title: "No user created",
                message: "There was an error creating the user!",
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
    /**
     * Navigate to about page for testing purposes.
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7OztBQUVILHNDQUF5RTtBQUV6RSxzREFBNkQ7QUFDN0QsK0NBQThDO0FBQzlDLGdDQUErQjtBQUMvQiwrQkFBOEI7QUFFOUIsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsb0NBQXNDO0FBUXRDLElBQWEsY0FBYztJQUt6Qjs7Ozs7T0FLRztJQUNILHdCQUFvQixnQkFBa0MsRUFBVSxJQUFVO1FBQXRELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBVDFFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBVWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBRUQsd0NBQXdDO0lBQ3hDLCtCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCx5RUFBeUU7SUFDekUseUVBQXlFO0lBQ3pFLDZCQUE2QjtJQUM3Qiw4QkFBSyxHQUFMO1FBQUEsaUJBaUJDO1FBaEJDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDYixJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO2FBQzdCO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFBLE1BQU07WUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsRUFDRCxVQUFBLFlBQVk7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLEtBQUssQ0FBQyxrRkFBa0YsQ0FBQyxDQUFDO1FBQzVGLENBQUMsQ0FDSixDQUFDO0lBQ0YsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSxnREFBZ0Q7SUFDaEQscUNBQXFDO0lBQ3JDLG9FQUFvRTtJQUNwRSx1Q0FBdUM7SUFDdkMsK0JBQU0sR0FBTjtRQUNFLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQzdCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxNQUFNO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDWixLQUFLLEVBQUUsY0FBYztnQkFDckIsT0FBTyxFQUFFLDhCQUE4QjtnQkFDdkMsWUFBWSxFQUFFLE9BQU87YUFDdEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxFQUNELFVBQUEsWUFBWTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1osS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsT0FBTyxFQUFFLHVDQUF1QztnQkFDaEQsWUFBWSxFQUFFLFlBQVk7YUFDM0IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRUQsNENBQTRDO0lBQzVDLHNDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLFNBQVMsR0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUNuRCxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ2hCLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksYUFBSyxDQUFDLE1BQU0sQ0FBQztZQUMxRSxRQUFRLEVBQUUsR0FBRztTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILDhCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBakdELElBaUdDO0FBOUZ5QjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBWSxpQkFBVTtpREFBQztBQUhuQyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLFlBQVk7UUFDekIsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDO0tBQzdDLENBQUM7cUNBWXNDLHlCQUFnQixFQUFnQixXQUFJO0dBWC9ELGNBQWMsQ0FpRzFCO0FBakdZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIHRzIGZpbGUgaXMgZm9yIHRoZSBsb2dpbiBwYWdlLlxuICogQXV0aG9yOiBaYWNoIExlQmxhbmNcbiAqIERhdGU6IDIwMTctMTEtMTdcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCJsb2dpbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wibG9naW4tY29tbW9uLmNzc1wiLCBcImxvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVzZXI6IFVzZXI7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhpcyBmaWxlLlxuICAgKiBcbiAgICogQHBhcmFtIHJvdXRlckV4dGVuc2lvbnMgXG4gICAqIEBwYXJhbSBwYWdlIFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIGluaXRhbGl6ZWQgdGhlIHBhZ2Ugd2l0aCBzb21lIGF0dHJpYnV0ZXNcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gIH1cblxuICAvLyBDaGFuZ2VzIHRoZSBidXR0b24gZnJvbSBzaWduaW4vc2lnbnVwXG4gIHN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpZ25VcCgpO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gVGhpcyBpcyBhIGxvZ2luIGZ1bmN0aW9uIHdpdGggZmlyZWJhc2UuIFdoZW4gc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiBpdFxuICAvLyB3aWxsIG1vdmUgeW91IHRvIHRoZSBuZXh0IHBhZ2UuIElmIHRoZSBsb2dpbiBmYWlsZWQgaXQgd2lsbCBwcmludCB0aGUgXG4gIC8vIGVycm9yIG1lc3NhZ2UgaW4gYW4gYWxlcnQuXG4gIGxvZ2luKCkge1xuICAgIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcbiAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xuICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkXG4gICAgICB9XG4gICAgfSkudGhlbihcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbGlzdFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3JNZXNzYWdlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgYWxlcnQoXCJUaGVyZSB3YXMgYW4gZXJyb3IgbG9nZ2luZyBpbjpcXG5QbGVhc2UgbWFrZSBzdXJlIHlvdXIgZW1haWwvcGFzc3dvcmQgaXMgY29ycmVjdC5cIik7XG4gICAgICB9XG4gICk7XG4gIH1cbiAgXG4gIC8vIFRoaXMgaXMgdGhlIHNpZ24gdXAgZnVuY3Rpb24gdGhhdCB3aWxsIHJlZ2lzdGVyIGFuIGFjY291bnQgd2l0aCBmaXJlYmFzZS4gXG4gIC8vIEl0IHdpbGwgYWxlcnQgeW91ciB1aWQgbm93IHdoZW4gc3VjY2Vzc2Z1bGwuIFxuICAvLyBJZiBmYWlsZWQgaXQgd2lsbCBhbGVydCB0aGUgZXJyb3IuXG4gIC8vIEFzIG9mIHJpZ2h0IG5vdyBvbmx5IGVtYWlsIGFuZCBwYXNzd29yZCBhcmUgbmVlZGVkIGZvciBhIHByb2ZpbGUuXG4gIC8vIFRPRE86IGltcGxlbWVudCBlbWFpbCB2ZXJpZmljYXRpb24uIFxuICBzaWduVXAoKSB7XG4gICAgZmlyZWJhc2UuY3JlYXRlVXNlcih7XG4gICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZFxuICAgIH0pLnRoZW4oXG4gICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJVc2VyIGNyZWF0ZWRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXNlciBzdWNjZXNzZnVsbHkgY3JlYXRlZCFcXG5cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJOaWNlIVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlID0+IHtcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vIHVzZXIgY3JlYXRlZFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJUaGVyZSB3YXMgYW4gZXJyb3IgY3JlYXRpbmcgdGhlIHVzZXIhXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0ssIGdvdCBpdFwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICk7XG4gIH1cbiAgXG4gIC8vIFRvZ2dsZXMgZGlzcGxheSBmb3Igc2lnbmluL3NpZ251cCBidXR0b24uXG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgIGxldCBjb250YWluZXIgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnRhaW5lci5hbmltYXRlKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc0xvZ2dpbmdJbiA/IG5ldyBDb2xvcihcIndoaXRlXCIpIDogbmV3IENvbG9yKFwiZ3JheVwiKSxcbiAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZSB0byBhYm91dCBwYWdlIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICAgKi9cbiAgYWJvdXQoKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9hYm91dFwiXSk7XG4gIH1cbn0iXX0=