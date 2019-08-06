import { Pipe, PipeTransform } from "@angular/core";
import { Bus } from "../Models/bus";

@Pipe({
  name: "busNumber"
})
export class BusNumberPipe implements PipeTransform {
  transform(busses: Array<Bus>, bussNumber: string): any {
    if (bussNumber == "all") {
      return busses;
    } else return busses.filter(x => x.DISPLAY_ROUTE_CODE == bussNumber);
  }
}
