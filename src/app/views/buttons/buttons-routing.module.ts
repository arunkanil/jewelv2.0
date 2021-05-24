import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';
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
        component: DropdownsComponent,
        data: {
          title: 'Dropdowns'
        }
      },
      {
        path: 'dnf',
        component: BrandButtonsComponent,
        data: {
          title: 'Brand buttons'
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
export class ButtonsRoutingModule {}
