import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

@Component({
  templateUrl: "allorders.component.html",
})
export class AllOrdersComponent implements OnInit {
  constructor(public dataservice: DataService) {}

  loading = true;
  orders = [];

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders() {
    this.loading = true;
    this.dataservice.getOrders().subscribe((result: any) => {
      this.orders = result.body;
      console.log("getOrders", this.orders);
      this.loading = false;
    });
  }
}
