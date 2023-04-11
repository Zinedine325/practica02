import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioproveedoresComponent } from './formularioproveedores.component';

describe('FormularioproveedoresComponent', () => {
  let component: FormularioproveedoresComponent;
  let fixture: ComponentFixture<FormularioproveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioproveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
