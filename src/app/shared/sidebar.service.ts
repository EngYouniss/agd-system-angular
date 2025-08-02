import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private _sidebarVisible$ = new BehaviorSubject<boolean>(false);
  sidebarVisible$ = this._sidebarVisible$.asObservable();

  show() {
    this._sidebarVisible$.next(true);
  }

  hide() {
    this._sidebarVisible$.next(false);
  }
}
