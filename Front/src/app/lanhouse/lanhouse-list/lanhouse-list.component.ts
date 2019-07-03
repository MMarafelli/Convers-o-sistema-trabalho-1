import { Component, OnInit } from '@angular/core';
import { LanHouse } from '../lanhouse';
import { LanHouseService } from '../lanhouse.service';

@Component({
  selector: 'app-lanhouse-list',
  templateUrl: './lanhouse-list.component.html',
  styleUrls: ['./lanhouse-list.component.css']
})
export class LanHouseListComponent implements OnInit {

  constructor(private lanhouseService: LanHouseService) { }

  lanhouse: LanHouse[] = [];
  criterio: String;

  ngOnInit() {

    this.lanhouseService.getAll()
    .subscribe(data => this.lanhouse = data,
      err => alert('Aconteceu um erro ' + err)
    );
    this.lanhouseService.lanHouseChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.lanhouse = data
      )
    );
  }
}
