import { Component, NgZone, OnInit, inject } from '@angular/core';

import { version as SampleVersion } from '../lib/version';

declare global {
  // eslint-disable-next-line no-var
  var ngZone: NgZone;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /**
   * Version of the CosmoPlot micro frontend.
   */
  appVersion?: string;

  /**
   * Title of the application.
   */
  title = 'Sample-Shell';

  constructor() {
    globalThis.ngZone = inject(NgZone);
  }

  public ngOnInit(): void {
    this.appVersion = SampleVersion;
  }
}
