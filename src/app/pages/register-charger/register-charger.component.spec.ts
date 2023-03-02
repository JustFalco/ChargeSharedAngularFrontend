import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterChargerComponent } from './register-charger.component';

describe('RegisterChargerComponent', () => {
  let component: RegisterChargerComponent;
  let fixture: ComponentFixture<RegisterChargerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterChargerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterChargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
