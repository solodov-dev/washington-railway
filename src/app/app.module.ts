import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LinesComponent } from './lines/lines.component';
import { StationsComponent } from './stations/stations.component';
import { StationInfoComponent } from './station-info/station-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LinesComponent,
    StationsComponent,
    StationInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
