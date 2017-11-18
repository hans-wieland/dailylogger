import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { TextView } from "ui/text-view";
import { isAndroid } from "platform";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";

@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./about.html",
  styleUrls: ["./about-common.css"]
})
export class AboutComponent {
  @ViewChild(RadSideDrawerComponent)
  public drawerComponent: RadSideDrawerComponent;
  private drawer: SideDrawerType;
  public pages:Array<Object>;
  constructor(private routerExtensions: RouterExtensions,
  private _changeDetectionRef: ChangeDetectorRef){
  // List all pages here
   this.pages = [
      //{name:"Home"},
      //{name:"Contact"},
      {name:"About"}
  ];
  }
  about() {
    this.routerExtensions.navigate(["/about"]);
  }

  public onTap() {

  }

  ngAfterViewInit() {
      this.drawer = this.drawerComponent.sideDrawer;
      this._changeDetectionRef.detectChanges();
  }

  public openDrawer() {
      this.drawer.toggleDrawerState();
  }


}
