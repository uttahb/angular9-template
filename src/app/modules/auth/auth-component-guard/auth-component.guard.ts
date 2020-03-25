import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { LoggedinUserService } from "../loggedin-user/loggedin-user.service";
import { map } from "rxjs/operators";

@Injectable()
export class AuthComponentGuard implements CanActivate {
  constructor(
    private userService: LoggedinUserService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const loggedinUser = this.userService.isLoggedin().getValue();
    if (!loggedinUser) {
      this.router.navigate(["/login"]);
    }
    return !!loggedinUser;
  }
}
