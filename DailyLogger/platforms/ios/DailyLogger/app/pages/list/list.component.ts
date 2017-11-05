import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./list.html",
  styleUrls: ["./list-common.css", "./list.css"]
})
export class ListComponent implements OnInit {
  groceryList: Array<Object> = [];

  ngOnInit() {
    this.groceryList.push({ name: "Apples" });
    this.groceryList.push({ name: "Bananas" });
    this.groceryList.push({ name: "Oranges" });
  }

  testPush() {
    alert("hello");
    firebase.push(
      '/users',
      {
        'list': this.groceryList 
      }
  ).then(
      function (result) {
        console.log("created key: " + result.key);
      }
  );
  }
}