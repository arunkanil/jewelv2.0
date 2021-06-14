import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './caller_list.component';
import { DropdownsComponent } from './dropdowns.component';
import { BrandButtonsComponent } from './brand-buttons.component';
import { KPCustomerDetailComponent } from './customerdetail.component';

const routes: Routes = [
  {
    path: '',
    
    children: [
      {
        path: '',
        redirectTo: 'kpcaller'
      },
      {
        path: 'verification',
        component: ButtonsComponent,
        data: {
          title: 'Profile'
        }
      },
      {
        path: 'assigned',
        component: ButtonsComponent,
        data: {
          title: 'Assigned List'
        }
      },
      {
        path: 'dnf',
        component: ButtonsComponent,
        data: {
          title: 'DNF'
        }
      },
      {
        path: 'kp_customer_details/:id',
        component: KPCustomerDetailComponent,
        data: {
          title: 'Customer Details'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KpCallerRoutingModule {}
