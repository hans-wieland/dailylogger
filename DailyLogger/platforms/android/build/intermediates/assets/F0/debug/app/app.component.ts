import { Component } from "@angular/core";

import { User } from "./shared/user/user";

@Component({
  selector: "my-app",
  moduleId: module.id,
  templateUrl: "./login.html",
  styleUrls: ["./login-common.css", "./login.css"]
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor() {
    this.user = new User();
  }
  submit() {
    alert("You’re using: " + this.user.email);
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}