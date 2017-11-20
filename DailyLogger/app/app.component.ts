/**
 * This is the main class for our project. This starts angular, not really sure what else it does.
 */

import { Component } from "@angular/core";

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {}