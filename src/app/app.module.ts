import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InlineComponent } from './templates/inline.component';
import { ExternalComponent } from './templates/external.component';

@NgModule({
  declarations: [
    AppComponent,
    ExternalComponent,
    InlineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
