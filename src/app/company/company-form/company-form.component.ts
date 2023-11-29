import { Component, OnInit, TrackByFunction } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  formGroup: FormGroup;


  constructor(private _fb: FormBuilder) {
    this.formGroup = this._fb.group({
      name: ['', [Validators.required]],
      address: this._fb.group({
        country: ['', [Validators.required]],
        street: ['', [Validators.required]],
        zipCode: [],
      }),
      employees: this._fb.array([].map((employee) => this._fb.group({
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]]
      })))
    })
  }

  ngOnInit(): void {
  }

  get employees(): FormArray {
    return this.formGroup.get('employees') as FormArray;
  }

  addEmployee() {
    this.employees.push(this._fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]]
    }))
  };

}
