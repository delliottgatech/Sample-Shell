import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';

import { registry } from 'src/remote.components';

@Component({
  selector: 'app-globe',
  standalone: true,
  imports: [],
  templateUrl: './globe.component.html',
  styleUrl: './globe.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GlobeComponent implements OnInit {
  public async ngOnInit(): Promise<void> {
    // load in mfes
    await registry.remote();
  }
}
