import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './caller_list.component';
import { DropdownsComponent } from './dropdowns.component';
import { BrandButtonsComponent } from './brand-buttons.component';
import { KPCustomerDetailComponent } from './customerdetail.component';
import { AuthGuard } from '../login/auth.guard';

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
        canActivate: [AuthGuard],
        component: ButtonsComponent,
        data: {
          roles: 'KP_CALLER',
          title: 'Profile'
        }
      },
      {
        path: 'assigned',
        canActivate: [AuthGuard],
        component: ButtonsComponent,
        data: {
          roles: 'KP_CALLER',
          title: 'Assigned List'
        }
      },
      {
        path: 'dnf',
        canActivate: [AuthGuard],
        component: ButtonsComponent,
        data: {
          roles: 'KP_CALLER',
          title: 'DNF'
        }
      },
      {
        path: 'kp_customer_details/:id',
        canActivate: [AuthGuard],
        component: KPCustomerDetailComponent,
        data: {
          roles: 'KP_CALLER',
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
