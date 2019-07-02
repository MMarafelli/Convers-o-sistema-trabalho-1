import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../games';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})
export class GamesFormComponent implements OnInit {

  private gamesIndex: number;
  private isNew: boolean = true;
  private games: Games;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private gamesService:GamesService) { }

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.gamesIndex = params['id'];
          this.gamesService.get(this.gamesIndex)
            .subscribe(data => this.games = data);
        } else {
          this.isNew = true;
        }
      }
    );
  }

  novo() {
    this.games = new Games();
  }

  salvar() {
    let result;
    if (this.isNew) {
      result = this.gamesService.add(this.games);
    } else {
      result = this.gamesService.update(this.games);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => console.log('Sucesso ' + data),
      err => {
        console.log("An error occurred. " + err);
      });
  }

  excluir() {
    if (this.games.codigo == null) {
      console.log("Selecione algum Game.")
    } else {
      if (confirm("Você realmente quer excluir o Game " + this.games.nome + "?"))
        this.gamesService.remove(this.games.codigo)
          .subscribe(
            data => console.log('Game removido ' + data),
            err => {
              console.log("Game não removido.");
            });
      this.novo();
      this.voltar();
    }
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/games']);
  }
}
