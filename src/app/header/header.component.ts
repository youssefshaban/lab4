import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;


  private _authSub: Subscription;

  constructor(private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    this._authSub = this._authService.authSubjectObservable.subscribe((data: boolean) => {
      console.log(data);

      this.isLoggedIn = data;
    });
  }

  logout(): void {
    this._authService.broadcastAuthValue(false);
    this._router.navigate(['/']);

  }

  ngOnDestroy() {
    this._authSub.unsubscribe();
  }

}
