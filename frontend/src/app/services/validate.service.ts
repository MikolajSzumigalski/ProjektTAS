import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.firstName == undefined || user.lastName === undefined || user.username == undefined || user.password == undefined || user.confirmPassword == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateLogin(user) {
    if (user.username === undefined || user.password === undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateUsername(username) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(username);
  }

  validatePassword(password, confirmPassword) {
    if (password !== confirmPassword) {
      return false;
    } else {
      return true;
    }
  }
}
