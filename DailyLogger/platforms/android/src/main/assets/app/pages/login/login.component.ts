import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../shared/user/user";
const firebase = require("nativescript-plugin-firebase");
import * as dialogs from "ui/dialogs";

@Component({
  selector: "my-app",
  moduleId: module.id,
  templateUrl: "login.html",
  styleUrls: ["login-common.css", "login.css"]
})
export class LoginComponent {
  user: User;
  isLoggingIn = true;

  constructor(private router: Router) {
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
        this.router.navigate(["/list"])
      },
      errorMessage => {
        console.log(errorMessage);
        alert("Login Error: " + errorMessage);
      }
  );
  }
  
  signUp() {
    firebase.createUser({
      email: this.user.email,
      password: this.user.password
    }).then(
        result => {
          dialogs.alert({
            title: "User created",
            message: "userid: " + result.key,
            okButtonText: "Nice!"
          })
        },
        errorMessage => {
          dialogs.alert({
            title: "No user created",
            message: errorMessage,
            okButtonText: "OK, got it"
          })
        }
    );
  }
  
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}