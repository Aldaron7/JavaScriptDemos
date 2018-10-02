import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  customer: Customer;
  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
    route.queryParams.subscribe((queryParams: Object) => (this.customer = customerService.getCustomerById(queryParams['id'])));
  }

  ngOnInit() {}
}
