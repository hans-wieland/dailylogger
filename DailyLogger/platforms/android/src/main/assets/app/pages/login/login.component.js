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
            //this.routerExtensions.navigate(["/list"], { clearHistory: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBRXpFLHNEQUE2RDtBQUM3RCwrQ0FBOEM7QUFDOUMsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQUU5QixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxvQ0FBc0M7QUFRdEMsSUFBYSxjQUFjO0lBS3pCLHdCQUFvQixnQkFBa0MsRUFBVSxJQUFVO1FBQXRELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSDFFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBSWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7SUFDdEMsQ0FBQztJQUVELHdDQUF3QztJQUN4QywrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSw2QkFBNkI7SUFDN0IsOEJBQUssR0FBTDtRQUFBLGlCQWtCQztRQWpCQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTthQUM3QjtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQSxNQUFNO1lBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixvRUFBb0U7WUFDcEUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxFQUNELFVBQUEsWUFBWTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsS0FBSyxDQUFDLGtGQUFrRixDQUFDLENBQUM7UUFDNUYsQ0FBQyxDQUNKLENBQUM7SUFDRixDQUFDO0lBRUQsNEVBQTRFO0lBQzVFLCtDQUErQztJQUMvQyxxQ0FBcUM7SUFDckMsb0VBQW9FO0lBQ3BFLHNDQUFzQztJQUN0QywrQkFBTSxHQUFOO1FBQ0UsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFBLE1BQU07WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNaLEtBQUssRUFBRSxjQUFjO2dCQUNyQixPQUFPLEVBQUUsOEJBQThCO2dCQUN2QyxZQUFZLEVBQUUsT0FBTzthQUN0QixDQUFDLENBQUE7UUFDSixDQUFDLEVBQ0QsVUFBQSxZQUFZO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDWixLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixPQUFPLEVBQUUsdUNBQXVDO2dCQUNoRCxZQUFZLEVBQUUsWUFBWTthQUMzQixDQUFDLENBQUE7UUFDSixDQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksU0FBUyxHQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ25ELFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDaEIsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxhQUFLLENBQUMsTUFBTSxDQUFDO1lBQzFFLFFBQVEsRUFBRSxHQUFHO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBdEZELElBc0ZDO0FBbkZ5QjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBWSxpQkFBVTtpREFBQztBQUhuQyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLFlBQVk7UUFDekIsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDO0tBQzdDLENBQUM7cUNBTXNDLHlCQUFnQixFQUFnQixXQUFJO0dBTC9ELGNBQWMsQ0FzRjFCO0FBdEZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCJsb2dpbi5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJsb2dpbi1jb21tb24uY3NzXCIsIFwibG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdXNlcjogVXNlcjtcclxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgfVxyXG5cclxuICAvLyBDaGFuZ2VzIHRoZSBidXR0b24gZnJvbSBzaWduaW4vc2lnbnVwXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaWduVXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFRoaXMgaXMgYSBsb2dpbiBmdW5jdGlvbiB3aXRoIGZpcmViYXNlLiBXaGVuIHN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4gaXRcclxuICAvLyB3aWxsIG1vdmUgeW91IHRvIHRoZSBuZXh0IHBhZ2UuIElmIHRoZSBsb2dpbiBmYWlsZWQgaXQgd2lsbCBwcmludCB0aGVcclxuICAvLyBlcnJvciBtZXNzYWdlIGluIGFuIGFsZXJ0LlxyXG4gIGxvZ2luKCkge1xyXG4gICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXHJcbiAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZFxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKFxyXG4gICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgICAgLy90aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xpc3RcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvdGFiXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3JNZXNzYWdlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIGFsZXJ0KFwiVGhlcmUgd2FzIGFuIGVycm9yIGxvZ2dpbmcgaW46XFxuUGxlYXNlIG1ha2Ugc3VyZSB5b3VyIGVtYWlsL3Bhc3N3b3JkIGlzIGNvcnJlY3QuXCIpO1xyXG4gICAgICB9XHJcbiAgKTtcclxuICB9XHJcblxyXG4gIC8vIFRoaXMgaXMgdGhlIHNpZ24gdXAgZnVuY3Rpb24gdGhhdCB3aWxsIHJlZ2lzdGVyIGFuIGFjY291bnQgd2l0aCBmaXJlYmFzZS5cclxuICAvLyBJdCB3aWxsIGFsZXJ0IHlvdXIgdWlkIG5vdyB3aGVuIHN1Y2Nlc3NmdWxsLlxyXG4gIC8vIElmIGZhaWxlZCBpdCB3aWxsIGFsZXJ0IHRoZSBlcnJvci5cclxuICAvLyBBcyBvZiByaWdodCBub3cgb25seSBlbWFpbCBhbmQgcGFzc3dvcmQgYXJlIG5lZWRlZCBmb3IgYSBwcm9maWxlLlxyXG4gIC8vIFRPRE86IGltcGxlbWVudCBlbWFpbCB2ZXJpZmljYXRpb24uXHJcbiAgc2lnblVwKCkge1xyXG4gICAgZmlyZWJhc2UuY3JlYXRlVXNlcih7XHJcbiAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJVc2VyIGNyZWF0ZWRcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJVc2VyIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIVxcblwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiTmljZSFcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yTWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTm8gdXNlciBjcmVhdGVkXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlcmUgd2FzIGFuIGVycm9yIGNyZWF0aW5nIHRoZSB1c2VyIVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0ssIGdvdCBpdFwiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBUb2dnbGVzIGRpc3BsYXkgZm9yIHNpZ25pbi9zaWdudXAgYnV0dG9uLlxyXG4gIHRvZ2dsZURpc3BsYXkoKSB7XHJcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnRhaW5lci5hbmltYXRlKHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKFwid2hpdGVcIikgOiBuZXcgQ29sb3IoXCJncmF5XCIpLFxyXG4gICAgICBkdXJhdGlvbjogMjAwXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFib3V0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9hYm91dFwiXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==