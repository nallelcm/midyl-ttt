import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(
      //"https://slothnet.ca:3001"
      "assets/data.json"
    );
  }

}

