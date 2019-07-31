import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-baku-bus",
  templateUrl: "./baku-bus.component.html",
  styleUrls: ["./baku-bus.component.scss"]
})
export class BakuBusComponent implements OnInit {
  latatude = 40;
  longatude = 49;
  busses = new Array<any>();

  constructor(private httpClient: HttpClient) {}

  async ngOnInit() {
    let result = await this.httpClient
      .get<any>("https://localhost:44301/api/BakuBus/Busses")
      .toPromise();
    this.busses = result.BUS;
  }
}
