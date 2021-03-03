import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
  {
    path: '',
    // data: {
    //   title: 'Theme'
    // },
    children: [
      {
        path: '',
        redirectTo: 'colors'
      },
      {
        path: 'contact_form',
        component: ColorsComponent,
        data: {
          title: 'Contact'
        }
      },
      // {
      //   path: 'typography',
      //   component: TypographyComponent,
      //   data: {
      //     title: 'Typography'
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
