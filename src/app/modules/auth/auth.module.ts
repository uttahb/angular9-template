import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UnauthComponentGuard } from "./unauth-component-guard/unauth-component.guard";
import { UnauthGuard } from "./unauth-guard/unauth.guard";
import { AuthComponentGuard } from "./auth-component-guard/auth-component.guard";
import { AuthGuard } from "./auth-guard/auth.guard";
import { LoggedinUserService } from "./loggedin-user/loggedin-user.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    UnauthComponentGuard,
    UnauthGuard,
    AuthComponentGuard,
    AuthGuard,
    LoggedinUserService
  ]
})
export class AuthModule {}
