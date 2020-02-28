import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './container/dashboard.component';
import {LoansOverviewComponent} from './pages/loans-overview/loans-overview.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '', component: LoansOverviewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
