import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObliqueStrategyComponent } from './oblique-strategy/oblique-strategy.component';
import { StartingInstrumentComponent } from './starting-instrument/starting-instrument.component';

@NgModule({
  declarations: [
    AppComponent,
    ObliqueStrategyComponent,
    StartingInstrumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
