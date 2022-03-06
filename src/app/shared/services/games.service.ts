import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public readonly games$$ = new BehaviorSubject<Game[]>([]);
  public readonly selectedGame$$ = new BehaviorSubject<Game | null>(null);

  private readonly RESOURCE_PATH = "/rest/game";

  constructor(private readonly http: HttpClient) {}

  public createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.RESOURCE_PATH, game).pipe(tap(game => this.games$$.next([...this.games$$.value, game])));
  }

  public fetchGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.RESOURCE_PATH).pipe(
      tap(games => this.games$$.next(games)),
      tap(games => this.selectedGame$$.next(games[0]))
    );
  }
}
