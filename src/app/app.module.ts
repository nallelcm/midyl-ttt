import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule } from "@angular/material/card";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DataService } from "./data.service";
import { GameResultComponent } from "./game-result/game-result.component";
import { OverallStatsComponent } from './overall-stats/overall-stats.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatPaginatorModule
  ],
  declarations: [AppComponent, HelloComponent, GameResultComponent, OverallStatsComponent],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}
