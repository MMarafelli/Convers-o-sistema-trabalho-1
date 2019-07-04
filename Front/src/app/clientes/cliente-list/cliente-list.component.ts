import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.sass']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClientesService) { }

  clientes: Cliente[] = [];

  ngOnInit() {

    this.clienteService.getAll()
        .subscribe(data => this.clientes = data, err => {
          alert('Aconteceu um erro!' + err);
          this.clienteService.clientesChanged.subscribe(
            (observable: any) => observable.subscribe(
              data => this.clientes = data
            )
          );
        })

  }

}
