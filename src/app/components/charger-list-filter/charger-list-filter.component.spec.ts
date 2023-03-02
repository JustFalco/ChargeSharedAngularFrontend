import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerListFilterComponent } from './charger-list-filter.component';

describe('ChargerListFilterComponent', () => {
  let component: ChargerListFilterComponent;
  let fixture: ComponentFixture<ChargerListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargerListFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargerListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
