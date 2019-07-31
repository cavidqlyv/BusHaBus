import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-converter",
  templateUrl: "./converter.component.html",
  styleUrls: ["./converter.component.scss"]
})
export class ConverterComponent implements OnInit {
  money = 0;
  result = 0;
  rate = 1;
  currency = "USD";

  readonly apiUrl = "https://free.currconv.com/api/v7/convert";

  readonly apiKey = "6f19702aa7952a9a107d";

  constructor(private httpClient: HttpClient) {}

  async ngOnInit() {
    await this.getRate();
  }

  async getRate() {
    let apiParams = {
      q: `${this.currency}_AZN`,
      compact: "ultra",
      apiKey: this.apiKey
    };

    let response = await this.httpClient
      .get<any>(this.apiUrl, { params: apiParams })
      .toPromise();
    this.rate = response[`${this.currency}_AZN`];
  }

  convert() {
    this.result = this.money / this.rate;
  }

  onFormSubmit() {
    this.convert();
  }
  onMoneyChange() {
    this.convert();
  }

  async onCurrencyChanged() {
    await this.getRate();
    this.convert();
  }
}
