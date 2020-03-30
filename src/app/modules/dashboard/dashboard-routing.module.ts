import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthComponentGuard } from '../auth/auth-component-guard/auth-component.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthComponentGuard],
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
