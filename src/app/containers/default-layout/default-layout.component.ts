import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { AuthenticationService } from "../../views/login/authentication.service";
import { navItems } from "../../_nav";

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  currentUser: User;
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
