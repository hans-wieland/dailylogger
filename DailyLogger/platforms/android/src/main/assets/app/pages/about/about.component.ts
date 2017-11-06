import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./about.html",
  styleUrls: ["./about-common.css"]
})
export class AboutComponent {}

//Need this to get sideDrawer working
export function showSideDrawer(args: observable.EventData) {
    console.log("Show SideDrawer tapped.");
    // Show sidedrawer ...
}
