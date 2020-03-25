import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoggedinUserService } from "../loggedin-user/loggedin-user.service";
import { map } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(
    private userService: LoggedinUserService,
    private router: Router
  ) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    const loggedinUser = this.userService.isLoggedin().getValue();
    if (!loggedinUser) {
      this.router.navigate(["/login"]);
    }
    return !!loggedinUser;
  }
}
