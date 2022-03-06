import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from 'rxjs';
import { GamesService } from './shared/services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isAddGamePage = false;

  constructor(private readonly router: Router, private readonly gamesService: GamesService) {}

  ngOnInit(): void {
    this.router.events.pipe(
      tap((routerEvents) => {
        if (routerEvents instanceof NavigationEnd) {
          this.isAddGamePage = routerEvents.url === '/add-game';
        }
      })
    ).subscribe();

    this.gamesService.fetchGames().subscribe();
  }
}
