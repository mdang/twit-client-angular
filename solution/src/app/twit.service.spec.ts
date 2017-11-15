import { TestBed, inject } from '@angular/core/testing';

import { TwitService } from './twit.service';

describe('TwitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitService]
    });
  });

  it('should be created', inject([TwitService], (service: TwitService) => {
    expect(service).toBeTruthy();
  }));
});
