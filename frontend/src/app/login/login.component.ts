import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {

  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessages.show('You are now logged in', { cssClass: 'alert-success', timeout: 3000 });
        console.log('A great success!');
        this.router.navigate(['user-account']);
      } else {
        this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        console.log('you tried and you failed. good job.');
        this.router.navigate(['login']);
      }
    });
  }

}
