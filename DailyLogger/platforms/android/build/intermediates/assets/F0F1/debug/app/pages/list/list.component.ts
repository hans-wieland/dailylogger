/**
 * This list component is the list page for the app.
 * Created by Zach.
 */

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "ui/text-field";
const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./list.html",
  styleUrls: ["./list-common.css", "./list.css"]
})
export class ListComponent implements OnInit {
  constructor(private routerExtensions: RouterExtensions) {

  }
  exerciseList : Array<Object> = [];

  /* Creates the text for the list items */
  ngOnInit() {
    this.exerciseList.push({ name: "Bench Press" });
    this.exerciseList.push({ name: "Back Squat" });
    this.exerciseList.push({ name: "Hang Clean" });
  }

  /**
   * This function pushes the list to firebase server
   */
  testPush() {
    alert("hello");
    firebase.push(
      '/users',
      {
        'list': this.exerciseList
      }
  ).then(
      result => {
        console.log("created key: " + result.key);
      }
  );
  }

  /**
   * navigate to about page
   */
  about() {
    this.routerExtensions.navigate(["/about"]);
  }
}
