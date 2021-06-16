import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { AuthenticationService } from "../../views/login/authentication.service";
import { navItems } from "../../_nav";

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent {
  currentUser: User;
  public sidebarMinimized = false;
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
    console.log("constructor",this.currentUser.user.UserType)
  }
  public navItems = navItems.filter((item) => item.role == localStorage.getItem("user_type") || item.role == "");;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
    console.log(this.currentUser.user?.UserType);
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
