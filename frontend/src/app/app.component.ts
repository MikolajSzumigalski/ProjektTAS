import { UserAccountComponent } from './user-account/user-account.component';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private authService: AuthService,
    private flashMessages: FlashMessagesService
  ) { }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessages.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    //this.router.navigate(['']);
    return false;
  }

}
