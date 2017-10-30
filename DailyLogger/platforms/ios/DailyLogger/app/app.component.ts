import { Component } from "@angular/core";
import { User } from "./shared/user/user";
const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "my-app",
  moduleId: module.id,
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor() {
    this.user = new User();
  }
  submit() {
    firebase.login({
      type: firebase.LoginType.PASSWORD,
      passwordOptions: {
        email: this.user.email,
        password: this.user.password
      }
    }).then(
      result => {
        JSON.stringify(result);
        alert("YOURE IN");
      },
      errorMessage => {
        console.log(errorMessage);
        alert("Failed Login");
      }
  );
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}