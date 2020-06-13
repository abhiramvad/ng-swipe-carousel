import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwipeCarouselModule } from 'swipe-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SwipeCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
