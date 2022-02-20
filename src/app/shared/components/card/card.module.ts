import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";
import { ChipModule } from "../chip/chip.module";

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, ChipModule],
  exports: [CardComponent],
})
export class CardModule {}
