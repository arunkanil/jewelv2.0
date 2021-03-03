// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { ColorsComponent } from './colors.component';
// import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    IvyCarouselModule
  ],
  declarations: [
    ColorsComponent,
    // TypographyComponent
  ]
})
export class ThemeModule { }
