"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import component from page
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
var about_component_1 = require("./pages/about/about.component");
// Make route by adding path and component
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "list", component: list_component_1.ListComponent },
    { path: "about", component: about_component_1.AboutComponent }
];
// Add component to this list.
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    list_component_1.ListComponent,
    about_component_1.AboutComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQUM3QixpRUFBK0Q7QUFDL0QsOERBQTREO0FBQzVELGlFQUErRDtBQUUvRCwwQ0FBMEM7QUFDN0IsUUFBQSxNQUFNLEdBQUc7SUFDcEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7Q0FDN0MsQ0FBQztBQUVGLDhCQUE4QjtBQUNqQixRQUFBLHFCQUFxQixHQUFHO0lBQ25DLGdDQUFjO0lBQ2QsOEJBQWE7SUFDYixnQ0FBYztDQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgY29tcG9uZW50IGZyb20gcGFnZVxyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbGlzdC9saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudFwiO1xyXG5cclxuLy8gTWFrZSByb3V0ZSBieSBhZGRpbmcgcGF0aCBhbmQgY29tcG9uZW50XHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcImxpc3RcIiwgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcImFib3V0XCIsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuLy8gQWRkIGNvbXBvbmVudCB0byB0aGlzIGxpc3QuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXHJcbiAgTG9naW5Db21wb25lbnQsXHJcbiAgTGlzdENvbXBvbmVudCxcclxuICBBYm91dENvbXBvbmVudFxyXG5dOyJdfQ==