import { TestBed } from '@angular/core/testing';

import { ChargerListService } from './charger-list.service';

describe('ChargerListService', () => {
  let service: ChargerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
