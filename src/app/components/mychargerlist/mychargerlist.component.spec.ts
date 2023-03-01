import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychargerlistComponent } from './mychargerlist.component';

describe('MychargerlistComponent', () => {
  let component: MychargerlistComponent;
  let fixture: ComponentFixture<MychargerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MychargerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MychargerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
