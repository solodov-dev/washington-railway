import { Injectable } from "@angular/core";
import { Line } from "./line";
import { Station } from "./station";
import { HttpClient } from "@angular/common/http";
import { baseUrl, httpOptions } from "./api.config";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getLines() {
    return this.http.get<Line[]>(`${baseUrl}/jLines`, httpOptions).pipe(
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
      .get<Station[]>(`${baseUrl}/jStations?LineCode=${line.code}`, httpOptions)
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

}
