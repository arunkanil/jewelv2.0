import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadyForDeliveryComponent } from './readyfordelivery.component';
import { AllOrdersComponent } from './allorders.component';
import { NewOrdersComponent } from './neworders.component';

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
        component: ReadyForDeliveryComponent,
        data: {
          title: 'Ready for Delivery'
        }
      },
      {
        path: 'order_processing',
        component: NewOrdersComponent,
        data: {
          title: 'Order Processing'
        }
      },
      {
        path: 'all_orders',
        component: AllOrdersComponent,
        data: {
          title: 'All Orders'
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
