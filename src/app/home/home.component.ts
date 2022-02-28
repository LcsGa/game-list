import { Component } from '@angular/core';
import { Game } from "../shared/models/game.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public games: Game[] = [
    {
      title: "Assassin's Creed Valhalla",
      platforms: [{ platform: "steam" }, { platform: "xbox" }, { platform: "playstation" }],
      imgUrl: "assets/assassin-s-creed-valhalla.png",
      text: "Assassin's Creed Valhalla est un jeu vidéo d'action-aventure et de rôle, développé par Ubisoft Montréal et édité par Ubisoft, sorti en novembre 2020 sur Microsoft Windows, PlayStation 4, Xbox One, Xbox Series, Google Stadia et PlayStation 5. Il appartient à la série Assassin's Creed et en est le douzième opus canonique. L'action principale du jeu se déroule pendant l'ère viking.",
    },
    {
      title: "Assassin's Creed Odyssey",
      platforms: [{ platform: "steam" }, { platform: "xbox" }, { platform: "playstation" }],
      imgUrl: "assets/assassin-s-creed-odyssey.jpeg",
      text: "Assassin's Creed Odyssey est une suite indirecte du précédent opus. Dans le présent, le joueur suit toujours Layla Hassan, un membre des Assassins qui explore la mémoire des premiers Assassins. En revanche, l'action se déroule durant la guerre du Péloponnèse en 431 avant Jésus-Christ, soit 382 ans avant l'histoire de Bayek relatée dans Origins et est centrée sur la première civilisation. Le joueur incarne l'un des descendants de Léonidas, Kassandra ou Alexios. À noter que le choix du personnage n’influence en rien le scénario du jeu.",
    },
  ];

  public selectedGame = this.games[0];

  public handleGameSelection(game: Game): void {
    this.selectedGame = game;
  }
}
