import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../data.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.css"]
})
export class CardListComponent implements OnInit {
  data;
  dataSource;
  displayedColumns: string[] = ["name", "rarity", "family"];
  constructor(private api: DataService) {}
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {}
  ngAfterViewInit() {
    this.showData();
  }
  showData() {
    this.api.getCardList().subscribe(data => {
      this.data = data;
      this.dataSource = new MatTableDataSource(data.cards);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
