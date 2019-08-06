import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { async } from "rxjs/internal/scheduler/async";
import { Bus } from "src/app/Models/bus";

@Component({
  selector: "app-baku-bus",
  templateUrl: "./baku-bus.component.html",
  styleUrls: ["./baku-bus.component.scss"]
})
export class BakuBusComponent implements OnInit {
  lat = 40.334175;
  lon = 49.91882;
  busses = new Array<Bus>();
  busNumber = "all";
  busNubers = Array<string>();
  constructor(private HTTPClient: HttpClient) {}

  async ngOnInit() {
    this.busNubers = await this.HTTPClient.get<Array<string>>(
      "https://localhost:44301/api/BakuBus/BusNubers"
    ).toPromise();

    await this.getBusses();

    setInterval(async () => {
      await this.getBusses();
    }, 10000);
  }

  async getBusses() {
    this.busses = await this.HTTPClient.get<Array<Bus>>(
      "https://localhost:44301/api/BakuBus/Busses"
    ).toPromise();
  }
}
