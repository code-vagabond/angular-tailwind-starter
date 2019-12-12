import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterModule } from '../shared/footer/footer.module';
import { LandingPageNavigationComponent } from './landing-page-navigation/landing-page-navigation.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';



@NgModule({
  declarations: [LandingComponent, LandingPageNavigationComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FooterModule
  ]
})
export class LandingModule { }
