import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import { User } from "../../models/user";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    console.log("curentuser", this.currentUserSubject);
    return this.currentUserSubject.value;
  }

  login(data) {
    return this.http.post<any>(`${environment.apiUrl}auth/local/`, data).pipe(
      map((user) => {
        // login successful if there's a jwt token in the response
        console.log(user);
        if (user.jwt) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("token", user.jwt);
          localStorage.setItem("username", user.user.username);
          localStorage.setItem("uid", user.user.id);
          localStorage.setItem("user_type", user.user.UserType);
          localStorage.setItem("email", user.user.email);
          // localStorage.setItem('name', user.data.user_data.name);
          // localStorage.setItem('phone_number', user.data.user_data.phone_number);
          // localStorage.setItem('shop_name', user.data.shops_details[0]?.shop_name);
          // localStorage.setItem('shop_id', user.data.shops_details[0]?.shop);

          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    this.currentUserSubject.next(null);
  }
}
