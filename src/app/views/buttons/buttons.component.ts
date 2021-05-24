import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../data.service";
import { customersColumn } from "../../constants/columnMetadata";

@Component({
  templateUrl: 'buttons.component.html'
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
  orders: any = {};
  columnDefs = [];
  rowData: any = [];
  private gridApi;
  private gridColumnApi;

  ngOnInit(): void {
    this.getLists();
  }
  getLists() {
    this.loading = true;
    this.dataservice.getCustomersFilter(false).valueChanges.subscribe((result: any) => {
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
