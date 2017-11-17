import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TextView } from "ui/text-view";
import { isAndroid } from "platform";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./about.html",
  styleUrls: ["./about-common.css"]
})
export class AboutComponent {
  constructor(private routerExtensions: RouterExtensions) {

 }
  about() {
    this.routerExtensions.navigate(["/about"]);
  }
}