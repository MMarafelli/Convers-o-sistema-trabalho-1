import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { LanHouseService } from '../lanhouse.service';
import { LanHouse } from '../lanhouse';

@Component({
  selector: 'app-lanhouse-form',
  templateUrl: './lanhouse-form.component.html',
  styleUrls: ['./lanhouse-form.component.css']
})
export class LanHouseFormComponent implements OnInit {

  private lanhouseIndex: number;
  private isNew: boolean = true;
  private lanhouse: LanHouse;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private lanhouseService:LanHouseService) { }

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.lanhouseIndex = params['id'];
          this.lanhouseService.get(this.lanhouseIndex)
            .subscribe(data => this.lanhouse = data);
        } else {
          this.isNew = true;
        }
      }
    );
  }

  novo() {
    this.lanhouse = new LanHouse();
  }

  salvar() {
    let result;
    if (this.isNew) {
      result = this.lanhouseService.add(this.lanhouse);
    } else {
      result = this.lanhouseService.update(this.lanhouse);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => console.log('Sucesso ' + data),
      err => {
        console.log("An error occurred. " + err);
      });
  }

  excluir() {
    if (this.lanhouse.codigo == null) {
      console.log("Selecione algum Usuário.")
    } else {
      if (confirm("Você realmente quer excluir o Usuário " + this.lanhouse.nome + "?"))
        this.lanhouseService.remove(this.lanhouse.codigo)
          .subscribe(
            data => console.log('Usuário removido ' + data),
            err => {
              console.log("Usuário não removido.");
            });
      this.novo();
      this.voltar();
    }
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/lanhouse']);
  }
}
