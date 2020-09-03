import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../actions/list.actions';
import { GiftsState } from '../reducer/list.reducer';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<GiftsState>) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      holiday: ['', [Validators.required]],
      dateOfHoliday: [''],
      needsGift: [true],
      needsCard: [true]

    });
  }

  get name(): AbstractControl { return this.form.get('name'); }
  get holiday(): AbstractControl { return this.form.get('holiday'); }
  get dateOfHoliday(): AbstractControl { return this.form.get('dateOfHoliday'); }
  get needsGift(): AbstractControl { return this.form.get('needsGift'); }
  get needsCard(): AbstractControl { return this.form.get('needsCard'); }

  submit(): void {
    this.store.dispatch(actions.addedGiftsItem(this.form.value));
    this.form.reset(); // clear out the form.
  }
}
