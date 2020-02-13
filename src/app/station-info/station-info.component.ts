import { Component, OnInit, Input } from '@angular/core';
import { Station } from '../station';
import { Train } from '../train';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-station-info',
  templateUrl: './station-info.component.html',
  styleUrls: ['./station-info.component.scss']
})

export class StationInfoComponent implements OnInit {
  @Input() station: Station;

  nextTrains: Train[];
  loading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getNextTrains(this.station);
  }

  getNextTrains(station: Station): void {
    this.loading = true;
    this.apiService.getNextTrains(station).subscribe(res => 
      {
        this.nextTrains = res
        this.loading = false;
      })
  }

}
