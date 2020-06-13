import { TestBed } from '@angular/core/testing';

import { SwipeCarouselService } from './swipe-carousel.service';

describe('SwipeCarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwipeCarouselService = TestBed.get(SwipeCarouselService);
    expect(service).toBeTruthy();
  });
});
