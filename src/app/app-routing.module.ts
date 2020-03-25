import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UnauthGuard } from "./modules/auth/unauth-guard/unauth.guard";
import { AuthGuard } from "./modules/auth/auth-guard/auth.guard";

const routes: Routes = [
  {
    path: "login",
    canLoad: [UnauthGuard],
    loadChildren: () =>
      import("./modules/login/login.module").then(m => {
        console.log("loaded loginmodule");
        return m.LoginModule;
      })
  },
  {
    path: "",
    canLoad: [AuthGuard],
    loadChildren: () =>
      import("./modules/layout/layout.module").then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
