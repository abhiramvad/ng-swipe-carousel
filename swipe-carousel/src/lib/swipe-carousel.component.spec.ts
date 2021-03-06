import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeCarouselComponent } from './swipe-carousel.component';

describe('SwipeCarouselComponent', () => {
  let component: SwipeCarouselComponent;
  let fixture: ComponentFixture<SwipeCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipeCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
