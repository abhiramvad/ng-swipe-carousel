import { HammerGestureConfig } from "@angular/platform-browser"
import * as Hammer from "hammerjs"

// @ts-ignore
export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    const config = new Hammer(element, {
      touchAction: "pan-y",
    })

    return config
  }
}
