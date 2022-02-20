import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Game } from "../../models/game.model";

@Component({
  selector: "app-list-item",
  template: `
    <div [ngClass]="{ 'list-item': true, 'list-item--active': isActive }" (click)="selectGame.emit(game)">
      <p>{{ game.title }}</p>

      <i class="list-item__icon fa-solid fa-chevron-right"></i>
    </div>
  `,
  styleUrls: ["./list-item.component.scss"],
})
export class ListItemComponent {
  @Input()
  public game!: Game;

  @Input()
  public isActive = false;

  @Output()
  public selectGame = new EventEmitter<Game>();
}
