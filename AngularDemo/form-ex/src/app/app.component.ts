import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;
  public _parentForm: FormGroup;
  public _name: FormGroup;
  public _addr: FormGroup;
  public _items: FormArray;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required)
    });

    this._name = this._fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]]
    });
    this._addr = this._fb.group({
      addr1: ['', [Validators.required]],
      addr2: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]]
    });
    this._items = this._fb.array([this.createItemFormGroup()]);
    this._parentForm = this._fb.group({
      name: this._name,
      addr: this._addr,
      items: this._items
    });
  }

  createItemFormGroup() {
    return this._fb.group({
      name: ['', Validators.required],
      qty: ['1', Validators.required],
      price: ['', Validators.required]
    });
  }

  addItem() {
    this._items.push(this.createItemFormGroup());
  }
  deleteItem(index) {
    delete this._items[index];
  }

  onSubmit(form: FormGroup) {
    alert('Reactive Submitted');
  }

  onTemplateSubmit() {
    alert('Submitted');
  }
}
