import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalinformationComponent } from './personalinformation/personalinformation.component';


export const AdminRoutes: Routes = [{

  path: '',
  redirectTo: 'login',
  pathMatch: 'full'

},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'Personal-Information',
  component: PersonalinformationComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
