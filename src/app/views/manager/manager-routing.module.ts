import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifiedListComponent } from './verified.component';

const routes: Routes = [
  {
    path: '',
    // data: {
    //   title: 'Theme'
    // },
    children: [
      {
        path: '',
        redirectTo: 'manager'
      },
      {
        path: 'verified_list',
        component: VerifiedListComponent,
        data: {
          title: 'Verified List'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule {}
