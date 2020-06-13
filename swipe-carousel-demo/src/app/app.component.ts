import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swipe-carousel-demo';
  items: string[] = ["hello","everyone","how do you do","hello","hello","everyone","hello","everyone","hello","everyone","hello","everyone","hello","everyone","hello","everyone","hello","everyone","hello","everyone","hello","everyone"]
  rotate = true
  showControls = true
}
