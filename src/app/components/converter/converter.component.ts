import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-converter",
  templateUrl: "./converter.component.html",
  styleUrls: ["./converter.component.scss"]
})
export class ConverterComponent implements OnInit {
  money: number;
  result: number;
  constructor() {}

  ngOnInit() {}

  onFormSubmit() {
    this.result = this.money / 1.7;
  }
  onChange() {
    this.result = this.money / 1.7;
  }
}
