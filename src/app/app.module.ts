import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AstroComponentsModule } from '@astrouxds/angular';

import { AppComponent } from './app.component';
import { GlobeComponent } from './globe/globe.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AstroComponentsModule,
    GlobeComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
