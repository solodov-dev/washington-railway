import { Component, OnInit } from "@angular/core";
import { Line } from "../line";
import { ApiService } from "../api.service";

@Component({
  selector: "app-lines",
  templateUrl: "./lines.component.html",
  styleUrls: ["./lines.component.scss"]
})
export class LinesComponent implements OnInit {
  lines: Line[];
  selectedLine: Line;

colors = {
    blue: "#508cfc",
    green: "#55b558",
    orange: "#fcb450",
    red: "#fc5053",
    silver: "#d8d8d8",
    yellow: "#fce807"
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getLines();
  }

  getLines(): void {
    this.apiService.getLines().subscribe((res: Line[]) => (this.lines = res));
  }
  
  selectLine(line: Line): void {
    this.selectedLine = line;
  }
}
