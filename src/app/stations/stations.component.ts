import { Component, OnChanges, Input } from "@angular/core";
import { Station } from "../station";
import { Line } from "../line";
import { ApiService } from "../api.service";

@Component({
  selector: "app-stations",
  templateUrl: "./stations.component.html",
  styleUrls: ["./stations.component.scss"]
})

export class StationsComponent implements OnChanges {
  @Input() line: Line;
  @Input() color: string;

  STATIONS: Station[];
  stations: Station[];

  constructor(private apiService: ApiService) {}

  ngOnChanges(): void {
    this.getStations();
  }

  getStations(): void {
    this.apiService
      .getStations(this.line)
      .subscribe(res => (this.STATIONS = this.stations = res));
  }

  filterStations(term: string): void {
    this.stations = this.STATIONS.filter(station =>
      station.name.includes(term.toLowerCase())
    );
  }

  toggleStation(station: Station): void {
    station.selected = !station.selected;
  }
}
