import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core"
import {
  animate,
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  style,
} from "@angular/animations"
import { Subscription, timer } from "rxjs"
import {CommonModule} from '@angular/common'


@Component({
  selector: 'lib-swipe-carousel',
  templateUrl: 'swipe-carousel.component.html',
  styleUrls: ['swipe-carousel.component.scss']
})
export class SwipeCarouselComponent implements AfterViewInit, OnChanges, OnDestroy {
  /* -- CONSTRUCTOR -- */

  constructor(private _builder: AnimationBuilder) {}

  /* -- PROPERTIES -- */

  private itemsElements: QueryList<ElementRef>
  @ViewChild("carousel") private carousel: ElementRef
  @ViewChild("carouselWrapper") private carouselWrapper: ElementRef

  @Input() items
  @Input() rotate: boolean
  @Input() showControls: boolean
  timing = "250ms ease-in"

  public disableNext = true
  public disablePrevious = true
  public rotation: Subscription

  private _currentSlide = 0
  private _itemWidth: number
  private _player: AnimationPlayer

  /* -- PUBLIC METHODS -- */

  public ngOnDestroy() {
    if (this.rotation) {
      this.rotation.unsubscribe()
    }
  }

  public ngOnChanges() {
    this._formatCarousel()
  }

  public ngAfterViewInit() {
    this._itemWidth = this.carouselWrapper.nativeElement.clientWidth
  }

  @HostListener("window:resize")
  public onResize(): void {
    this._itemWidth = this.carouselWrapper.nativeElement.clientWidth
  }

  public onSelectNext(): void {
    this.disablePrevious = false
    this._currentSlide = (this._currentSlide + 1) % this.itemsElements.length
    this._buildAnimation()
  }

  public onSelectPrevious(): void {
    this.disableNext = false
    this._currentSlide =
      (this._currentSlide - 1 + this.itemsElements.length) %
      this.itemsElements.length
    this._buildAnimation()
  }

  public onSetCurrentSlide(currentSlide: number) {
    this._currentSlide = currentSlide
    this._buildAnimation()
  }

  public onSwipeLeft(event) {
    this.onSelectNext()
  }

  public onSwipeRight(event) {
    this.onSelectPrevious()
  }

  public onStartRotation() {
    if (this.rotate && this.items.length > 1) {
      this._rotateAnimation()
    }
  }

  public onStopRotation() {
    if (this.rotate && this.items.length > 1 && this.rotation) {
      this.rotation.unsubscribe()
    }
  }

  private _buildAnimation() {

    const offset = this._currentSlide * this._itemWidth
    const myAnimation: AnimationFactory = this._builder.build([
      animate("0ms", style({ opacity: 0 })),
      animate(this.timing, style({ transform: `translateX(-${offset}px)` })),
      animate("250ms ease-in", style({ opacity: 1 })),
    ])
    this._player = myAnimation.create(this.carousel.nativeElement)
    this._player.play()

    this.disablePrevious = this._currentSlide === 0
    this.disableNext = this._currentSlide + 1 === this.itemsElements.length
  }

  private _formatCarousel() {
    this.items[0].active = true
   

    if (this.showControls === true && this.items.length > 1) {
      this.showControls = true
      this.disableNext = false
    }

    if (this.rotate && this.items.length > 1) {
      this._rotateAnimation()
    }
  }

  private _rotateAnimation() {
    const source = timer(10000, 10000)
    this.rotation = source.subscribe(() => this.onSelectNext())
  }
}


