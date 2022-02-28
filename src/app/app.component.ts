import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isAddGamePage = false;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      tap((routerEvents) => {
        if (routerEvents instanceof NavigationEnd) {
          this.isAddGamePage = routerEvents.url === '/add-game';
        }
      })
    ).subscribe();
  }
}
