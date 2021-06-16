import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  templateUrl: "customerdetail.component.html",
})
export class ManagerCustomerDetailComponent implements OnInit {
  constructor(
    public dataservice: DataService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}
  @ViewChild("myModal") public myModal: ModalDirective;
  @ViewChild("deleteModal") public deleteModal: ModalDirective;
  @ViewChild("commentModal") public commentModal: ModalDirective;

  id: any;
  loading = true;
  details: any = [];
  btnLoading = false;
  users: any = [];
  agentForm = this.fb.group({
    agent: ["", Validators.required],
  });
  commentForm = this.fb.group({
    RemarksText: ["", Validators.required],
    event_date_time: ["", Validators.required],
  });

  ngOnInit(): void {
    this.getLists();
    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.dataservice
      .getSingleCustomer(this.id)
      .valueChanges.subscribe((result: any) => {
        console.log("getSingleCustomer", result.data.customer);
        this.details = result.data.customer;
        this.loading = false;
      });
  }
  getLists() {
    this.loading = true;
    this.dataservice
      .getUsers("FIELD_AGENT")
      .valueChanges.subscribe((result: any) => {
        console.log("getUsers", result.data.users);
        this.users = result.data.users;
      });
  }
  FormSubmit() {
    let resp = {};
    console.log(this.agentForm.value);
    this.dataservice
      .SetFieldAgent(this.agentForm.value.agent, this.details.id)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.updateUser) {
          alert("Field Agent assigned successfully!");
          this.myModal.hide();
        } else {
          alert("Failed. Please check the fields!");
        }
      });
  }
  CommentSubmit() {
    let resp = {};
    console.log(this.commentForm.value);
    this.dataservice
      .AddCustomerComment(this.details.id, this.commentForm.value)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.updateCustomer) {
          alert("Comment added successfully!");
          this.commentModal.hide();
        } else {
          alert("Failed. Please check the fields!");
        }
      });
  }
  deleteAgent() {
    let resp = {};
    this.dataservice.DeleteAgent(this.id).subscribe((result: any) => {
      resp = result.data;
      console.log("response", result);
      if (result.data.deleteTeleCallerContact) {
        alert("Agent deleted successfully!");
        this.router.navigate(["/order/order_processing"]);
        this.deleteModal.hide();
      } else {
        alert("Failed. Please check again!");
      }
    });
  }
}
