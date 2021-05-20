import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../../data.service";
import { AuthenticationService } from "./authentication.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent {
  @ViewChild("usForm") usForm: NgForm;

  loginForm: any = {};
  result: any = {};
  returnUrl: string;
  error = "";
  loading = false;

  constructor(
    public dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  onSubmit() {
    this.loginForm = this.usForm.value;
    console.log(this.loginForm);
    this.loading = true;
    this.authenticationService
      .login(this.loginForm)
      .pipe(first())
      .subscribe(
        (data) => {
          this.loading = false;
          this.router.navigate([this.returnUrl]);
          alert(data.message);
        },
        (error) => {
          this.error = error;
          this.loading = false;
          console.log(error);
          alert(error.error.message);
        }
      );
  }
}
