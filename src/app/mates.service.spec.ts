import { TestBed } from '@angular/core/testing';

import { MatesService } from './mates.service';

describe('MatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatesService = TestBed.get(MatesService);
    expect(service).toBeTruthy();
  });
});
