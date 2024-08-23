import { TestBed } from '@angular/core/testing';

import { AngularVlibrasService } from './angular-vlibras.service';

describe('AngularVlibrasService', () => {
  let service: AngularVlibrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularVlibrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
