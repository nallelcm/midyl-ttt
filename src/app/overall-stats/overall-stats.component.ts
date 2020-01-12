import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-overall-stats',
  templateUrl: './overall-stats.component.html',
  styleUrls: ['./overall-stats.component.css']
})
export class OverallStatsComponent implements OnInit {
  data;
  constructor(private api: DataService) {}

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.showData();
  }
  showData() {
    this.api.getMatches().subscribe(data => {
      this.data = data;
    });
  }
}