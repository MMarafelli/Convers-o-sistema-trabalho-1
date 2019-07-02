import { Component, OnInit } from '@angular/core';
import { Games } from '../games';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  games: Games[] = [];
  criterio: String;

  ngOnInit() {

    this.gamesService.getAll()
    .subscribe(data => this.games = data,
      err => alert('Aconteceu um erro ' + err)
    );
    this.gamesService.gamesChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.games = data
      )
    );
  }
}
