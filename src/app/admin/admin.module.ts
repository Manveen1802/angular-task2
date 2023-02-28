import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { AdminRoutes, AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PersonalinformationComponent } from './personalinformation/personalinformation.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PersonalinformationComponent,
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule.forChild(AdminRoutes),
    TableModule
    
  
    
  ],
  exports: [RouterModule]
})
export class AdminModule { }
