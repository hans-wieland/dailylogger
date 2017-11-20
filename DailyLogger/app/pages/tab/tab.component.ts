import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TextView } from "ui/text-view";
import { isAndroid } from "platform";
import { RouterExtensions } from "nativescript-angular/router";
import { StackLayout } from "ui/layouts/stack-layout";
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";

@Component({
  selector: "tab",
  moduleId: module.id,
  templateUrl: "./tab.html",
  styleUrls: ["./tab-common.css"]
})

export class TabComponent {
  constructor(private routerExtensions: RouterExtensions) {

  }

  tab() {
    this.routerExtensions.navigate(["/tab"]);
  }
}

//Code adapted from NativeScript and Angular tutorial for tabs
