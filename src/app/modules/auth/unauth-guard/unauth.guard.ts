import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoggedinUserService } from '../loggedin-user/loggedin-user.service';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class UnauthGuard implements CanLoad {
  constructor(
    private userService: LoggedinUserService,
    private router: Router
  ) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    const loggedInUser = this.userService.isLoggedin().getValue();
    if (loggedInUser) {
      console.log('redirecting to dashboard');
      this.router.navigate(['/dashboard']);
    }

    return !loggedInUser;
  }
}
