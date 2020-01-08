import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../data.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: "app-game-result",
  templateUrl: "./game-result.component.html",
  styleUrls: ["./game-result.component.css"]
})
export class GameResultComponent implements OnInit {
  data;
  dataSource;
  displayedColumns: string[] = [
    "datetime",
    "npc",
    "duration",
    "rules",
    "outcome"
  ];
  constructor(private api: DataService) {}
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {}
  ngAfterViewInit() {
    this.showData();
  }
  showData() {
    this.api.getData().subscribe(data => {
      this.data = data;
      this.dataSource = new MatTableDataSource(data.matches);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
