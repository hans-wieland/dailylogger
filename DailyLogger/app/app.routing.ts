// Import component from page
import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { AboutComponent } from "./pages/about/about.component";
import {TabComponent} from "./pages/tab/tab.component";
import {ProfileComponent} from "./pages/profile/profile.component"

// Make route by adding path and component
export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "about", component: AboutComponent },
  { path: "tab", component: TabComponent},
  { path: "profile", component: ProfileComponent}
];

// Add component to this list.
export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  AboutComponent,
  TabComponent,
  ProfileComponent
];
