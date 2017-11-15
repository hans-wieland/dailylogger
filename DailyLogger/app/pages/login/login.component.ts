import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../shared/user/user";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
const firebase = require("nativescript-plugin-firebase");
import * as dialogs from "ui/dialogs";

@Component({
  selector: "my-app",
  moduleId: module.id,
  templateUrl: "login.html",
  styleUrls: ["login-common.css", "login.css"]
})
export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;
  @ViewChild("container") container: ElementRef;

  constructor(private router: Router, private page: Page) {
    this.user = new User();
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundColor = "white";
  }

  // Changes the button from signin/signup
  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  
  // This is a login function with firebase. When successfully logged in it
  // will move you to the next page. If the login failed it will print the 
  // error message in an alert.
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
        this.router.navigate(["/list"]);
      },
      errorMessage => {
        console.log(errorMessage);
        alert("Login Error: " + errorMessage);
      }
  );
  }
  
  // This is the sign up function that will register an account with firebase. 
  // It will alert your uid now when successfull. TODO: alert something useful
  // If failed it will alert the error.
  // As of right now only email and password are needed for a profile.
  // TODO: make update profile page to include name, profile picture.
  // TODO: implement email verification. 
  signUp() {
    firebase.createUser({
      email: this.user.email,
      password: this.user.password
    }).then(
        result => {
          dialogs.alert({
            title: "User created",
            message: "User successfully created!\nuserid: " + result.key,
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
  
  // Toggles display for signin/signup button.
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: this.isLoggingIn ? new Color("white") : new Color("gray"),
      duration: 200
    });
  }

  about() {
    this.router.navigate(["/about"]);
  }
}