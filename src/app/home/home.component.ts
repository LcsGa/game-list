import { Component } from '@angular/core';
import { Game } from '../shared/models/game.model';
import { GamesService } from '../shared/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  public readonly games$ = this.gamesService.games$$.asObservable();

  public readonly selectedGame$ = this.gamesService.selectedGame$$.asObservable();

  constructor(private readonly gamesService: GamesService) {}
}
