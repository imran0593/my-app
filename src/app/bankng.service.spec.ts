import { TestBed } from '@angular/core/testing';

import { BankngService } from './bankng.service';

describe('BankngService', () => {
  let service: BankngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
