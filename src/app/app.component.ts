import { ApplicationRef, Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'infinite-change-detection-example';

  constructor(applicationRef: ApplicationRef) {
    if (isDevMode()) {
      // First, store the original tick function
      const originalTick = applicationRef.tick;

      applicationRef.tick = function () {
        // Save start time
        const windowsPerfomance = window.performance;
        const before = windowsPerfomance.now();

        // Run the original tick() function
        const returnValue = originalTick.apply(this, []);

        // Save end time, calculate the delta, then log to console
        const after = windowsPerfomance.now();
        const runTime = after - before;
        window.console.log('[Profiler] CHANGE DETECTION TIME', runTime, 'ms');
        return returnValue;
      };
    }
  }

  items = Array.from({ length: 1000 }, (_, i) => i);
  ngOnInit() {
    console.log('AppComponent.onInit()');
  }
}
