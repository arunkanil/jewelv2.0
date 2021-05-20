// Angular
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { CustomersComponent } from './readyfordelivery.component';

// Forms Component
import { AllOrdersComponent } from './allorders.component';
import { AgentsComponent } from './neworders.component';
import { AgentDetailComponent } from './agentdetail.component';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Carousel Component
// import { CarouselModule } from 'ngx-bootstrap/carousel';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CustomerDetailComponent } from './customerdetail.component';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    IvyCarouselModule,
    // CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    CustomersComponent,
    AllOrdersComponent,
    AgentsComponent,
    AgentDetailComponent,
    CustomerDetailComponent
  ]
})
export class BaseModule { }
