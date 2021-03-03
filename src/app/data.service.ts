import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DataService {
  baseURL = environment.apiUrl;
  params: URLSearchParams = new URLSearchParams();

  constructor(private http: HttpClient) {}

  getOrders() {
    const httpOptions: Object = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Token 1f33a5f697dcb0eb37f8891f8a025b5d3ce0e8cd`,
      }),
      observe: "response",
    };
    return this.http.get(this.baseURL + "order/1/shop/", httpOptions);
  }
}
