import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ConverterComponent } from "./components/converter/converter.component";
import { DigitsPipe } from './pipes/digits.pipe';

@NgModule({
  declarations: [AppComponent, ConverterComponent, DigitsPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
