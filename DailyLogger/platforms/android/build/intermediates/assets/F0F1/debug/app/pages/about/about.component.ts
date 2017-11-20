/**
 * This is the about component. This file initalized the page for our about page
 * most of this is just text so this file will be pretty empty.
 * This page was created by Anna.
 */
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TextView } from "ui/text-view";
import { isAndroid } from "platform";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "about",
  moduleId: module.id,
  templateUrl: "./about.html",
  styleUrls: ["./about-common.css"]
})
export class AboutComponent {
  constructor(private routerExtensions: RouterExtensions) {

 }
 /**
  * navigate to about page. No longer needed
  */
  about() {
    this.routerExtensions.navigate(["/about"]);
  }
}