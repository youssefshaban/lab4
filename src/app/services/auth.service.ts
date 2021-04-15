import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authSubject = new BehaviorSubject<boolean>(false);

  get authSubjectObservable(): Observable<boolean> {
    return this._authSubject.asObservable();
  }

  broadcastAuthValue(value: boolean): void {
    this._authSubject.next(value);
  }

  get isLoggedIn(): boolean {
    return this._authSubject.value;
  }
}
