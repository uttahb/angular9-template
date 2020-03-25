import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth-guard/auth.guard";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
