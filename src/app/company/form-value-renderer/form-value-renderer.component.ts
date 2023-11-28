import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-value-renderer',
  template: `
  <p>{{ formGroup.value | json}} </p>
  `,
  styleUrls: ['./form-value-renderer.component.css']
})
export class FormValueRendererComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private container: ControlContainer) { }

  ngOnInit(): void {
    this.formGroup = this.container.control as FormGroup;

    this.formGroup.valueChanges.subscribe(value => {
      console.log('form value changed: ', value);
    })
  }

}
