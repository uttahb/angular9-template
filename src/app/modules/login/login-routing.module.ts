import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { UnauthComponentGuard } from "../auth/unauth-component-guard/unauth-component.guard";

const routes: Routes = [
  {
    path: "",
    canActivate: [UnauthComponentGuard],
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
