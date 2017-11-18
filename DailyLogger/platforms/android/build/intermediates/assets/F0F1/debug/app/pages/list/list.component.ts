import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
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

  ngOnInit() {
    this.exerciseList.push({ name: "Apples" });
    this.exerciseList.push({ name: "Bananas" });
    this.exerciseList.push({ name: "Oranges" });
  }

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

  about() {
    this.routerExtensions.navigate(["/about"]);
  }
}