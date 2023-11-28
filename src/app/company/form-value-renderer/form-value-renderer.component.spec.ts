import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValueRendererComponent } from './form-value-renderer.component';

describe('FormValueRendererComponent', () => {
  let component: FormValueRendererComponent;
  let fixture: ComponentFixture<FormValueRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValueRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValueRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
