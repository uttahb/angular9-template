import { Injectable } from '@angular/core';
import { map, switchMap, share } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
@Injectable()
export class LoggedinUserService {
  private _loggedinUser: any = true;
  private _loggedinUser$ = new BehaviorSubject(this.getLoggedinUser());
  constructor() { }

  getLoggedinUser() {
    return this._loggedinUser;
  }
  isLoggedin() {
    return this._loggedinUser$;
  }
}
