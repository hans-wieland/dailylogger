import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TextView } from "ui/text-view";
import { isAndroid } from "platform";

@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./about.html",
  styleUrls: ["./about-common.css"]
})
export class AboutComponent {}

//Use for the textView box if needed
export class BasicTextViewComponent {}

//Need this to get sideDrawer working
// export function showSideDrawer(args: observable.EventData) {
//     console.log("Show SideDrawer tapped.");
//     // Show sidedrawer ...
// }
