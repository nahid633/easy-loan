import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {TeamComponent} from './pages/team/team.component';
import {Error404Component} from './pages/error404/error404.component';


const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {path: '', loadChildren: () => import('./pages/user/landing-page/landing-page.module').then(landingPage => landingPage.LandingPageModule)},
      {path: 'team', component: TeamComponent},
      {path: 'contact', loadChildren: () => import('./pages/user/contact/contact.module').then(contact => contact.ContactModule)},
      {path: 'dashboard', loadChildren: () => import('./pages/user/dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule)},
      {path: 'feature', loadChildren: () => import('./pages/user/feature/feature.module').then(feature => feature.FeatureModule)},
      {path: 'pricing', loadChildren: () => import('./pages/user/pricing/pricing.module').then(pricing => pricing.PricingModule)},

    ]
  },

  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(login => login.LoginModule)},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
