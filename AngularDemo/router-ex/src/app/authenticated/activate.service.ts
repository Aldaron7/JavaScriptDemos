import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateService implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate() {
    return this.userService.authenticated;
  }
}
