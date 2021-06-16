import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { AgentsColumn } from "../../constants/columnMetadata";
import { ActionRenderer } from "../../utils/StatusRenderer";

@Component({
  templateUrl: "agents.component.html",
})
export class AgentsComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.columnDefs = [...AgentsColumn];
    this.rowSelection = "single";
  }

  @ViewChild("myModal") public myModal: ModalDirective;
  agentForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    phone1: ["", Validators.required],
    phone2: ["", Validators.required],
    phone3: ["", Validators.required],
    group: ["", Validators.required],
  });
  private gridApi;
  private gridColumnApi;

  loading = true;
  btnLoading = false;
  orders: any = {};
  columnDefs = [];
  rowData: any = [];
  groups: any = [];
  frameworkComponents = {
    statusRenderer: ActionRenderer,
    // idRenderer: IdRenderer,
  };

  ngOnInit(): void {
    this.getLists();
  }

  getLists() {
    this.loading = true;
    this.dataservice.getAgents().valueChanges.subscribe((result: any) => {
      console.log("getAgents", result.data.teleCallerContacts);
      this.rowData = result.data.teleCallerContacts;
    });
    this.dataservice.getGroups().valueChanges.subscribe((result: any) => {
      console.log("getGroups", result.data.groups);
      this.groups = result.data.groups;
    });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows);
    this.router.navigate(["/telecaller/agent_details",selectedRows[0].id], {
      state: { data: selectedRows },
    });
  }
  FormSubmit() {
    let resp = {};
    console.log(this.agentForm.value);
    this.dataservice.AddAgent(this.agentForm.value).subscribe((result: any) => {
      resp = result.data;
      console.log("response", result);
      if (result.data.createTeleCallerContact) {
        alert("Agent added successfully!");
        this.getLists();
        this.myModal.hide();
      } else {
        alert("Failed. Please check the fields!");
      }
    });
  }
}
