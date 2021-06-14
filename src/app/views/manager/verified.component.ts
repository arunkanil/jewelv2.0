import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../data.service";
import { customersColumn } from "../../constants/columnMetadata";
import { ModalDirective } from "ngx-bootstrap/modal";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  templateUrl: "verified.component.html",
})
export class VerifiedListComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.columnDefs = [...customersColumn];
    this.rowSelection = "multiple";
  }
  @ViewChild("myModal") public myModal: ModalDirective;
  callerForm = this.fb.group({
    id: ["", Validators.required],
  });
  loading = true;
  btnLoading = false;
  orders: any = {};
  columnDefs = [];
  rowData: any = [];
  users: any = [];
  selectedRows: any[];
  btnDisabled = true;
  private gridApi;
  private gridColumnApi;

  ngOnInit(): void {
    this.getLists();
  }
  getLists() {
    this.loading = true;
    let filter = {
      is_verified: true,
      kp_caller_assigned_null: true,
    };
    this.dataservice
      .getCustomersFilter(filter)
      .valueChanges.subscribe((result: any) => {
        console.log("getCustomersFilter", result.data.customers);
        this.rowData = result.data.customers;
      });
    this.dataservice
      .getUsers("KP_CALLER")
      .valueChanges.subscribe((result: any) => {
        console.log("getUsers", result.data.users);
        this.users = result.data.users;
      });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onSelectionChanged(event) {
    this.selectedRows = this.gridApi.getSelectedRows();
    if (this.selectedRows.length > 0) {
      this.btnDisabled = false;
    } else {
      this.btnDisabled = true;
    }
    console.log(this.selectedRows);
    // this.router.navigate(
    //   ["/kpcaller/kp_customer_details", selectedRows[0].id],
    //   {
    //     state: { data: selectedRows },
    //   }
    // );
  }
  FormSubmit() {
    let resp = {};
    console.log(
      this.callerForm.value,
      Array.from(this.selectedRows, (x) => x.id)
    );
    this.dataservice
      .SetKpCaller(
        this.callerForm.value.id,
        Array.from(this.selectedRows, (x) => x.id)
      )
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.updateUser) {
          alert("Assigned successfully!");
          this.getLists();
          this.myModal.hide();
        } else {
          alert("Failed. Please check the fields!");
        }
      });
  }
}
