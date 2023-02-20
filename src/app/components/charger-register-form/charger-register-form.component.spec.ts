import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerRegisterFormComponent } from './charger-register-form.component';

describe('ChargerRegisterFormComponent', () => {
  let component: ChargerRegisterFormComponent;
  let fixture: ComponentFixture<ChargerRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargerRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargerRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
