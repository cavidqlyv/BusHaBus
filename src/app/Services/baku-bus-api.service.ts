import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BakuBusApiService {
  constructor(private httpClient: HttpClient) {}

  async loadBusses() {
    let data = await this.httpClient
      .get<any>("http://localhost:44301/api/BakuBus/Busses")
      .toPromise();
    return data.BUS;
  }

  // async loadBusNumbers() {
  //   let busNumbers = await this.httpClient
  //     .get<any>("http://localhost:59124/api/BakuBus/busNumbers")
  //     .toPromise();
  //   return busNumbers;
  // }
}
