import { Component, OnInit, DoCheck, Inject } from '@angular/core';
import { Product } from '../model/product';
import { Model } from '../model/repository.model';
import { SharedState, MODES, SHARED_STATE } from './sharedState.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  product: Product = new Product();
  originalProduct: Product = new Product();
  // lastId: number;
  editing = false;

  constructor(
    private model: Model,
    activeRoute: ActivatedRoute,
    private router: Router /*@Inject(SHARED_STATE) private stateEvents: Observable<SharedState>*/
  ) {
    activeRoute.params.subscribe(params => {
      this.editing = params['mode'] == 'edit';
      const id = params['id'];
      if (id != null) {
        Object.assign(this.product, model.getProduct(id) || new Product());
        Object.assign(this.originalProduct, this.product);
      }
    });
    // stateEvents.subscribe(update => {
    //   this.product = new Product();
    //   if (update.id != undefined) {
    //     Object.assign(this.product, this.model.getProduct(update.id));
    //   }
    //   // tslint:disable-next-line:triple-equals
    //   this.editing = update.mode == MODES.EDIT;
    // });
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      // this.product = new Product();
      // form.reset();
      this.originalProduct = this.product;
      this.router.navigateByUrl('/');
    }
  }

  // resetForm() {
  //   this.product = new Product();
  // }

  ngOnInit() {}
}
