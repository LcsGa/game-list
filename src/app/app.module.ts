import { NgModule } from "@angular/core";
import { CardModule } from "./shared/components/card/card.module";
import { ChipModule } from "./shared/components/chip/chip.module";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "./shared/components/button/button.module";
import { ListItemModule } from "./shared/components/list-item/list-item.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChipModule, CardModule, ButtonModule, ListItemModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
