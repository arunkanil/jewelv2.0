import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../data.service";
import { customersColumn } from "../../constants/columnMetadata";

@Component({
  templateUrl: 'caller_list.component.html'
})
export class ButtonsComponent {

  rowSelection: string;
  constructor(
    public dataservice: DataService,
    private router: Router,
  ) {
    this.columnDefs = [...customersColumn];
    this.rowSelection = "single";
  }
  
  loading = true;
  btnLoading = false;
  title = "Verification";
  orders: any = {};
  columnDefs = [];
  rowData: any = [];
  private gridApi;
  private gridColumnApi;

  ngOnInit(): void {
    this.getLists();
    console.log(this.router);
  }
  getLists() {
    this.loading = true;
    let filter ={};
    if(this.router.url === "/kpcaller/verification") {
      filter = {
        is_verified: false,
      };
      this.title = "Verification";
    }
    else if(this.router.url === "/kpcaller/assigned") {
      filter = {
        kp_id: localStorage.getItem("uid"),
      };
      this.title = "Assigned";
    }
    else {
      filter = {
        MarriageDate_null: true,
      };
      this.title = "Date Not Fixed";
    }
    this.dataservice.getCustomersFilter(filter).valueChanges.subscribe((result: any) => {
      console.log("getCustomersFilter", result.data.customers);
      this.rowData = result.data.customers;
    });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows);
    this.router.navigate(["/kpcaller/kp_customer_details",selectedRows[0].id], {
      state: { data: selectedRows },
    });
  }
}
