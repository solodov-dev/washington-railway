import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LinesComponent } from './lines/lines.component';
import { StationsComponent } from './stations/stations.component';
import { StationInfoComponent } from './station-info/station-info.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LinesComponent,
    StationsComponent,
    StationInfoComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
