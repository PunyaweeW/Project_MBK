import { TestBed } from '@angular/core/testing';

import { MbkApiService } from './mbk-api.service';

describe('MbkApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MbkApiService = TestBed.get(MbkApiService);
    expect(service).toBeTruthy();
  });
});
