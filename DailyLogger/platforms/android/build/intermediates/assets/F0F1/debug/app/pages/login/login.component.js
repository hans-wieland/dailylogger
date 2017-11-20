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
            _this.routerExtensions.navigate(["/tab"], { clearHistory: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7OztBQUVILHNDQUF5RTtBQUV6RSxzREFBNkQ7QUFDN0QsK0NBQThDO0FBQzlDLGdDQUErQjtBQUMvQiwrQkFBOEI7QUFFOUIsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsb0NBQXNDO0FBUXRDLElBQWEsY0FBYztJQUt6Qjs7Ozs7T0FLRztJQUNILHdCQUFvQixnQkFBa0MsRUFBVSxJQUFVO1FBQXRELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBVDFFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBVWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBRUQsd0NBQXdDO0lBQ3hDLCtCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCx5RUFBeUU7SUFDekUseUVBQXlFO0lBQ3pFLDZCQUE2QjtJQUM3Qiw4QkFBSyxHQUFMO1FBQUEsaUJBaUJDO1FBaEJDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDYixJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO2FBQzdCO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFBLE1BQU07WUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUMsRUFDRCxVQUFBLFlBQVk7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLEtBQUssQ0FBQyxrRkFBa0YsQ0FBQyxDQUFDO1FBQzVGLENBQUMsQ0FDSixDQUFDO0lBQ0YsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSxnREFBZ0Q7SUFDaEQscUNBQXFDO0lBQ3JDLG9FQUFvRTtJQUNwRSx1Q0FBdUM7SUFDdkMsK0JBQU0sR0FBTjtRQUNFLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQzdCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxNQUFNO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDWixLQUFLLEVBQUUsY0FBYztnQkFDckIsT0FBTyxFQUFFLDhCQUE4QjtnQkFDdkMsWUFBWSxFQUFFLE9BQU87YUFDdEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxFQUNELFVBQUEsWUFBWTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1osS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsT0FBTyxFQUFFLHVDQUF1QztnQkFDaEQsWUFBWSxFQUFFLFlBQVk7YUFDM0IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRUQsNENBQTRDO0lBQzVDLHNDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLFNBQVMsR0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUNuRCxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ2hCLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksYUFBSyxDQUFDLE1BQU0sQ0FBQztZQUMxRSxRQUFRLEVBQUUsR0FBRztTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUExRkQsSUEwRkM7QUF2RnlCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO2lEQUFDO0FBSG5DLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsWUFBWTtRQUN6QixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUM7S0FDN0MsQ0FBQztxQ0FZc0MseUJBQWdCLEVBQWdCLFdBQUk7R0FYL0QsY0FBYyxDQTBGMUI7QUExRlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgdHMgZmlsZSBpcyBmb3IgdGhlIGxvZ2luIHBhZ2UuXG4gKiBBdXRob3I6IFphY2ggTGVCbGFuY1xuICogRGF0ZTogMjAxNy0xMS0xN1xuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcImxvZ2luLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJsb2dpbi1jb21tb24uY3NzXCIsIFwibG9naW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXNlcjogVXNlcjtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAvKipcbiAgICogVGhlIGNvbnN0cnVjdG9yIGZvciB0aGlzIGZpbGUuXG4gICAqIFxuICAgKiBAcGFyYW0gcm91dGVyRXh0ZW5zaW9ucyBcbiAgICogQHBhcmFtIHBhZ2UgXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gIH1cblxuICAvKipcbiAgICogaW5pdGFsaXplZCB0aGUgcGFnZSB3aXRoIHNvbWUgYXR0cmlidXRlc1xuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgfVxuXG4gIC8vIENoYW5nZXMgdGhlIGJ1dHRvbiBmcm9tIHNpZ25pbi9zaWdudXBcbiAgc3VibWl0KCkge1xuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICB0aGlzLmxvZ2luKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxuICB9XG4gIFxuICAvLyBUaGlzIGlzIGEgbG9naW4gZnVuY3Rpb24gd2l0aCBmaXJlYmFzZS4gV2hlbiBzdWNjZXNzZnVsbHkgbG9nZ2VkIGluIGl0XG4gIC8vIHdpbGwgbW92ZSB5b3UgdG8gdGhlIG5leHQgcGFnZS4gSWYgdGhlIGxvZ2luIGZhaWxlZCBpdCB3aWxsIHByaW50IHRoZSBcbiAgLy8gZXJyb3IgbWVzc2FnZSBpbiBhbiBhbGVydC5cbiAgbG9naW4oKSB7XG4gICAgZmlyZWJhc2UubG9naW4oe1xuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XG4gICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcbiAgICAgIH1cbiAgICB9KS50aGVuKFxuICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90YWJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yTWVzc2FnZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIGFsZXJ0KFwiVGhlcmUgd2FzIGFuIGVycm9yIGxvZ2dpbmcgaW46XFxuUGxlYXNlIG1ha2Ugc3VyZSB5b3VyIGVtYWlsL3Bhc3N3b3JkIGlzIGNvcnJlY3QuXCIpO1xuICAgICAgfVxuICApO1xuICB9XG4gIFxuICAvLyBUaGlzIGlzIHRoZSBzaWduIHVwIGZ1bmN0aW9uIHRoYXQgd2lsbCByZWdpc3RlciBhbiBhY2NvdW50IHdpdGggZmlyZWJhc2UuIFxuICAvLyBJdCB3aWxsIGFsZXJ0IHlvdXIgdWlkIG5vdyB3aGVuIHN1Y2Nlc3NmdWxsLiBcbiAgLy8gSWYgZmFpbGVkIGl0IHdpbGwgYWxlcnQgdGhlIGVycm9yLlxuICAvLyBBcyBvZiByaWdodCBub3cgb25seSBlbWFpbCBhbmQgcGFzc3dvcmQgYXJlIG5lZWRlZCBmb3IgYSBwcm9maWxlLlxuICAvLyBUT0RPOiBpbXBsZW1lbnQgZW1haWwgdmVyaWZpY2F0aW9uLiBcbiAgc2lnblVwKCkge1xuICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcbiAgICB9KS50aGVuKFxuICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBjcmVhdGVkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlVzZXIgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQhXFxuXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiTmljZSFcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZSA9PiB7XG4gICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJObyB1c2VyIGNyZWF0ZWRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlcmUgd2FzIGFuIGVycm9yIGNyZWF0aW5nIHRoZSB1c2VyIVwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LLCBnb3QgaXRcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICApO1xuICB9XG4gIFxuICAvLyBUb2dnbGVzIGRpc3BsYXkgZm9yIHNpZ25pbi9zaWdudXAgYnV0dG9uLlxuICB0b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBjb250YWluZXIuYW5pbWF0ZSh7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuaXNMb2dnaW5nSW4gPyBuZXcgQ29sb3IoXCJ3aGl0ZVwiKSA6IG5ldyBDb2xvcihcImdyYXlcIiksXG4gICAgICBkdXJhdGlvbjogMjAwXG4gICAgfSk7XG4gIH1cbn0iXX0=