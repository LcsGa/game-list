import { Component, Input } from "@angular/core";
import { Game } from "../../models/game.model";
import { GamesService } from "../../services/games.service";

@Component({
  selector: "app-list-item",
  template: `
    <div [ngClass]="{ 'list-item': true, 'list-item--active': isActive }" (click)="selectGame()">
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

  constructor(private readonly gamesService: GamesService) {}

  public selectGame(): void {
    this.gamesService.selectedGame$$.next(this.game);
  }
}
