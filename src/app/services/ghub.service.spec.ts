import { TestBed } from '@angular/core/testing';

import { GhubService } from './ghub.service';

describe('GhubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhubService = TestBed.get(GhubService);
    expect(service).toBeTruthy();
  });
});
