import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  userName: string = 'Ali';
  isLoggedIn: boolean;
  private _authSub: Subscription;

  constructor(private _authService: AuthService,
    private _router: Router
  ) { }


  ngOnInit(): void {
    this._authSub = this._authService.authSubjectObservable.subscribe((data: boolean) => {
      console.log(data);
      this.isLoggedIn = data;
    });
  }


  onInput(ev): void {
    console.log(this.userName);
    this.userName = ev.target.value;
  }

  login(ev): void {
    // console.log(ev);

    // this.isLoggedIn = true;
    // console.log(this.isLoggedIn);
    this._authService.broadcastAuthValue(true);
    this._router.navigate(['/']);


  }

  logout(): void {
    this.userName = '';
    // this.isLoggedIn = false;
    this._authService.broadcastAuthValue(false);
  }

  ngOnDestroy() {
    this._authSub.unsubscribe();
  }
}
