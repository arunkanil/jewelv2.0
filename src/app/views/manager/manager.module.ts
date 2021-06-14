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
    // TypographyComponent
  ]
})
export class ManagerModule { }
