import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UnauthComponentGuard } from '../auth/unauth-component-guard/unauth-component.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'login',
        canActivate: [UnauthComponentGuard],
        component: LoginComponent
      },
      {
        path: 'signup',
        canActivate: [UnauthComponentGuard],
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
