import { TestBed } from '@angular/core/testing';

import { ServicesPokeService } from './services-poke.service';

describe('ServicesPokeService', () => {
  let service: ServicesPokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesPokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
