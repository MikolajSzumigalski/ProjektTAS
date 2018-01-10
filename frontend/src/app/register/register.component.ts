import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: String;
  lastName: String;
  username: String;
  password: String;
  confirmPassword: String;

  constructor(
    private validateService: ValidateService,
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword
    };

    // required fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessages.show('Wypełnij wszystkie pola', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // validate username
    if (!this.validateService.validateUsername(user.username)) {
      this.flashMessages.show('Niepoprawny adres e-mail', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Validate confirmPassword
    if (!this.validateService.validatePassword(user.password, user.confirmPassword)) {
      this.flashMessages.show('Hasła nie są jednakowe', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessages.show('Użytkownik zarejestrowany, możesz się zalogować', { cssClass: 'alert-success', timeout: 3000 });
        console.log('Great success!');
        this.router.navigate(['/login']);
      } else {
        this.flashMessages.show('Nieudana rejestracja', { cssClass: 'alert-danger', timeout: 3000 });
        console.log('something went wrong');
        this.router.navigate(['/register']);
      }
    });
  }
}
