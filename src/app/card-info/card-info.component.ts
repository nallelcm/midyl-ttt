import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../data.service";
@Component({
  selector: "app-card-info",
  templateUrl: "./card-info.component.html",
  styleUrls: ["./card-info.component.css"]
})
export class CardInfoComponent implements OnInit {
  @Input() cardID
  data;
  constructor(private api: DataService) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.showData();
  }
  showData() {
    this.api.getCardInfo(this.cardID).subscribe(data => {
      this.data = data;
    });
  }
}
