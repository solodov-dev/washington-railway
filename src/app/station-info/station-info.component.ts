import { Component, OnInit, Input } from '@angular/core';
import { Station } from '../station';

@Component({
  selector: 'app-station-info',
  templateUrl: './station-info.component.html',
  styleUrls: ['./station-info.component.scss']
})

export class StationInfoComponent implements OnInit {
  @Input() station: Station;

  constructor() { }

  ngOnInit(): void {
  }

}
