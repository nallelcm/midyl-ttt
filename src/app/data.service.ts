import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class DataService {
  apiURL = "https://slothnet.ca:3001";
  constructor(private http: HttpClient) {}
  getMatches() {
    return this.http.get(this.apiURL + "/matches");
  }
  getCardInfo(cardID) {
    return this.http.get(this.apiURL + "/cards/" + cardID);
  }
  getCardList() {
    return this.http.get(this.apiURL + "/cards");
  }
}
