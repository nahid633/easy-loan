import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './container/dashboard.component';
import { LoansOverviewComponent } from './pages/loans-overview/loans-overview.component';


@NgModule({
  declarations: [DashboardComponent, LoansOverviewComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
