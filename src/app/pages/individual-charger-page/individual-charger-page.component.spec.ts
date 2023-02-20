import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualChargerPageComponent } from './individual-charger-page.component';

describe('IndividualChargerPageComponent', () => {
  let component: IndividualChargerPageComponent;
  let fixture: ComponentFixture<IndividualChargerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualChargerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualChargerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
