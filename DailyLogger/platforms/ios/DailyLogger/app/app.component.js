"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var firebase = require("nativescript-plugin-firebase");
var dialogs = require("ui/dialogs");
var AppComponent = (function () {
    function AppComponent() {
        this.isLoggingIn = true;
        this.user = new user_1.User();
    }
    AppComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    AppComponent.prototype.login = function () {
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: this.user.email,
                password: this.user.password
            }
        }).then(function (result) {
            JSON.stringify(result);
            alert("Login Succesful!");
        }, function (errorMessage) {
            console.log(errorMessage);
            alert("Login Error: " + errorMessage);
        });
    };
    AppComponent.prototype.signUp = function () {
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
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        moduleId: module.id,
        templateUrl: "./pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkNBQTBDO0FBQzFDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELG9DQUFzQztBQVF0QyxJQUFhLFlBQVk7SUFJdkI7UUFGQSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUdqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELDZCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0UsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNiLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7YUFDN0I7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLFVBQUEsTUFBTTtZQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUNELFVBQUEsWUFBWTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsS0FBSyxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQ0osQ0FBQztJQUNGLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0UsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFBLE1BQU07WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNaLEtBQUssRUFBRSxjQUFjO2dCQUNyQixPQUFPLEVBQUUsVUFBVSxHQUFHLE1BQU0sQ0FBQyxHQUFHO2dCQUNoQyxZQUFZLEVBQUUsT0FBTzthQUN0QixDQUFDLENBQUE7UUFDSixDQUFDLEVBQ0QsVUFBQSxZQUFZO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDWixLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixPQUFPLEVBQUUsWUFBWTtnQkFDckIsWUFBWSxFQUFFLFlBQVk7YUFDM0IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUEzREQsSUEyREM7QUEzRFksWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDckUsQ0FBQzs7R0FDVyxZQUFZLENBMkR4QjtBQTNEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHVzZXI6IFVzZXI7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICB9XG4gIHN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpZ25VcCgpO1xuICAgIH1cbiAgfVxuICBcbiAgbG9naW4oKSB7XG4gICAgZmlyZWJhc2UubG9naW4oe1xuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XG4gICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcbiAgICAgIH1cbiAgICB9KS50aGVuKFxuICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgYWxlcnQoXCJMb2dpbiBTdWNjZXNmdWwhXCIpO1xuICAgICAgfSxcbiAgICAgIGVycm9yTWVzc2FnZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIGFsZXJ0KFwiTG9naW4gRXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgKTtcbiAgfVxuICBcbiAgc2lnblVwKCkge1xuICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgZW1haWw6IHRoaXMudXNlci5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcbiAgICB9KS50aGVuKFxuICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBjcmVhdGVkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcInVzZXJpZDogXCIgKyByZXN1bHQua2V5LFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk5pY2UhXCJcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2UgPT4ge1xuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiTm8gdXNlciBjcmVhdGVkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0ssIGdvdCBpdFwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICk7XG4gIH1cbiAgXG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG59Il19