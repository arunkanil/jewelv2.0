// Angular
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NgModule } from '@angular/core';
import { VerifiedListComponent } from './verified.component';

// import { TypographyComponent } from './typography.component';

// Theme Routing
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerCustomerComponent } from './customers.component';
import { ManagerCustomerDetailComponent } from './customerdetail.component';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [
    VerifiedListComponent,
    ManagerCustomerComponent,
    ManagerCustomerDetailComponent
  ]
})
export class ManagerModule { }
