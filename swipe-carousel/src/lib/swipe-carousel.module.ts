import { NgModule } from '@angular/core';
import { SwipeCarouselComponent } from './swipe-carousel.component';
import "hammerjs"
import { MyHammerConfig } from "../hammer-config"
import { BrowserModule, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser"
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [SwipeCarouselComponent],
  imports: [
    CommonModule,BrowserModule,BrowserAnimationsModule
  ],
  providers: [ {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig,
  }],
  exports: [SwipeCarouselComponent]
})
export class SwipeCarouselModule { }
