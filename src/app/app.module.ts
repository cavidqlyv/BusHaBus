import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ConverterComponent } from "./components/converter/converter.component";
import { DigitsPipe } from "./pipes/digits.pipe";
import { BakuBusComponent } from "./components/baku-bus/baku-bus.component";

import { AgmCoreModule } from "@agm/core";
import { ToDoComponent } from "./components/to-do/to-do.component";
import { BusNumberPipe } from "./pipes/bus-number.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    DigitsPipe,
    BakuBusComponent,
    ToDoComponent,
    BusNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyANpw3sAs-eqJTMT8bdCdYIbiio0TOtMok"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
