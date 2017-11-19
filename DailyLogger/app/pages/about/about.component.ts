import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TextView } from "ui/text-view";
import { isAndroid } from "platform";
import { RouterExtensions } from "nativescript-angular/router";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";

@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./about.html",
  styleUrls: ["./about-common.css"]
})

export class AboutComponent {
  public items: Array<SegmentedBarItem>;
  public selectedIndex = 0;
  public visibility1 = true;
  public visibility2 = false;
  public visibility3 = false;

  constructor(private routerExtensions: RouterExtensions) {
    this.items = [];
        for (let i = 1; i < 4; i++) {
            let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            segmentedBarItem.title = "View " + i;
            this.items.push(segmentedBarItem);
          }
          this.selectedIndex = 0;
        }

  about() {
    this.routerExtensions.navigate(["/about"]);
  }


  public onSelectedIndexChange(args) {
      let segmetedBar = <SegmentedBar>args.object;
      this.selectedIndex = segmetedBar.selectedIndex;
      switch (this.selectedIndex) {
          case 0:
              this.visibility1 = true;
              this.visibility2 = false;
              this.visibility3 = false;
              break;
          case 1:
              this.visibility1 = false;
              this.visibility2 = true;
              this.visibility3 = false;
              break;
          case 2:
              this.visibility1 = false;
              this.visibility2 = false;
              this.visibility3 = true;
              break;
          default:
              break;
        }
    }

}
