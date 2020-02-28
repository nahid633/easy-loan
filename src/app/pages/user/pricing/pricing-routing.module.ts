import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PricingComponent} from './container/pricing.component';

const routes: Routes = [
  {path: '', component: PricingComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }
