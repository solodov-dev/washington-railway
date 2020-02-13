import { Injectable } from "@angular/core";
import { Line } from "./line";
import { Station } from "./station";
import { Train } from "./train";
import { HttpClient } from "@angular/common/http";
import { railUrl, httpOptions, predictionUrl } from "./api.config";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getLines() {
    return this.http.get<Line[]>(`${railUrl}/jLines`, httpOptions).pipe(
      map(response =>
        response["Lines"].map((line: any) => {
          return {
            code: line.LineCode.toLowerCase(),
            name: line.DisplayName.toLowerCase()
          };
        })
      )
    );
  }

  getStations(line: Line) {
    return this.http
      .get<Station[]>(`${railUrl}/jStations?LineCode=${line.code}`, httpOptions)
      .pipe(
        map(response =>
          response["Stations"].map((station: any) => {
            return {
              selected: false,
              code: station.Code.toLowerCase(),
              name: station.Name.toLowerCase(),
            };
          })
        )
      );
  }
  
getNextTrains(station: Station) {
    return this.http
      .get<Train[]>(`${predictionUrl}/${station.code}`, httpOptions)
      .pipe(
        map(response =>
          response["Trains"].map((train: any) => {
            return {
              destination: train.DestinationName,
              location: train.LocationName,
              timeToArrival: train.Min
            };
          })
        )
      );
  }
}
