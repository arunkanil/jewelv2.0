import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './readyfordelivery.component';
import { AllOrdersComponent } from './allorders.component';
import { AgentsComponent } from './neworders.component';
import { AgentDetailComponent } from './agentdetail.component';
import { CustomerDetailComponent } from './customerdetail.component';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'ready_for_delivery',
        canActivate: [AuthGuard],
        component: CustomersComponent,
        data: {
          roles: 'TELE_CALLER',
          title: 'Customers'
        }
      },
      {
        path: 'order_processing',
        canActivate: [AuthGuard],
        component: AgentsComponent,
        data: {
          roles: 'TELE_CALLER',
          title: 'Agents'
        }
      },
      {
        path: 'all_orders',
        component: AllOrdersComponent,
        data: {
          title: 'All Orders'
        }
      },
      {
        path: 'agent_details/:id',
        component: AgentDetailComponent,
        data: {
          title: 'Agent Details'
        }
      },
      {
        path: 'customer_details/:id',
        component: CustomerDetailComponent,
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
export class BaseRoutingModule {}
