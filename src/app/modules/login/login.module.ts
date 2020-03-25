import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";
import { AuthModule } from "../auth/auth.module";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthModule, LoginRoutingModule]
})
export class LoginModule {
  constructor() {
    console.log("hey in loign module");
  }
}
