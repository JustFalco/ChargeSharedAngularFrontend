import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychargersComponent } from './mychargers.component';

describe('MychargersComponent', () => {
  let component: MychargersComponent;
  let fixture: ComponentFixture<MychargersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MychargersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MychargersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
