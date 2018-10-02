import { Component, ViewChild } from '@angular/core';
import { CustomerService } from './customer/customer.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from './authenticated/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Component';
  @ViewChild('name') name;
  @ViewChild('password') password;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private location: Location,
    private userService: UserService
  ) {}

  login() {
    this.userService.authenticate(this.name.nativeElement.value, this.password.nativeElement.value);
  }

  component1() {
    this.router.navigate(['component1']).then(result => {
      console.log('navigation result: ' + result);
    });
  }
  component2() {
    this.router.navigateByUrl('/component2');
  }
  back() {
    this.location.back();
  }
}
