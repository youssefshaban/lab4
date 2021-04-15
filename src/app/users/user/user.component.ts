import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;
  @Input() user;
  @Output() messageEvent = new EventEmitter<string>();
  private _authSub: Subscription;

  constructor(private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    this._authSub = this._authService.authSubjectObservable.subscribe((data: boolean) => {
      console.log(data);

      this.isLoggedIn = data;
    });
  }

  sendMessage(): void {
    this.messageEvent.emit(`You have clicked on ${this.user.name}.`);
    this._router.navigate(['/users'], {
      queryParams: {
        age: this.user.age,
        name: this.user.name
      },
      queryParamsHandling: 'merge'
    });
  }

  ngOnDestroy() {
    this._authSub.unsubscribe();
  }
}
