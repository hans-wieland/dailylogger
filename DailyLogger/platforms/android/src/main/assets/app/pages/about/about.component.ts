import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TextView } from "ui/text-view";
import { isAndroid } from "platform";
import { RouterExtensions } from "nativescript-angular/router";
import { TabView, SelectedIndexChangedEventData } from "ui/tab-view";

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

//Code adapted from NativeScript and Angular tutorial for tabs
