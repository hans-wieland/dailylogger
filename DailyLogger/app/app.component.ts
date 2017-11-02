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
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  
  login() {
    firebase.login({
      type: firebase.LoginType.PASSWORD,
      passwordOptions: {
        email: this.user.email,
        password: this.user.password
      }
    }).then(
      result => {
        JSON.stringify(result);
        alert("Login Succesful!");
      },
      errorMessage => {
        console.log(errorMessage);
        alert("Login Error: " + errorMessage);
      }
  );
  }
  
  signUp() {

  }
  
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}