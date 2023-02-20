import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerListComponent } from './charger-list.component';

describe('ChargerListComponent', () => {
  let component: ChargerListComponent;
  let fixture: ComponentFixture<ChargerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
