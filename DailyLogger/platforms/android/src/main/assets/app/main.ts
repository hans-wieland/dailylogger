/**
 * This is the main ts file to run our app, it just initalizes firebase then runs the app.
 */

import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
const firebase = require("nativescript-plugin-firebase");

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
  persist: true
}).then(
  instance => {
    console.log("firebase.init done");
  },
  error => {
    console.log(`firebase.init error: ${error}`);
  }
);

//Angular's main method
platformNativeScriptDynamic().bootstrapModule(AppModule);