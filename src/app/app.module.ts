import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CardModule } from "./shared/components/card/card.module";
import { ChipModule } from "./shared/components/chip/chip.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChipModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
