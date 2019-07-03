import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { LanHouse } from './lanhouse';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class LanHouseService {

  private url: string = 'http://localhost:8080/lanhouse';

  lanHouseChanged = new EventEmitter<Observable<LanHouse[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<LanHouse[]> {
    console.log("aqui getall");
    return this.http.get(this.url)
            .map(res => res.json())
            .catch(this.handleError);
    
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', error);
    return Observable.throw(erro);
  }

  add(lanHouse: LanHouse) {
    console.log("aqui add");
    return this.http.post(this.url,JSON.stringify(lanHouse),
    {headers: this.getHeaders()})
    .do(data => this.lanHouseChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  remove(id: number) {
    console.log("aqui remove");
    return this.http.delete(this.getUrl(id), {headers: this.getHeaders()})
    .map(res => res.json())
    .do(data => this.lanHouseChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private getUrl(id: number) {
    return `${this.url}/${id}`;
  }

  update(lanHouse: LanHouse) {
    console.log("aqui update");
    return this.http.put(this.url,JSON.stringify(lanHouse),
    {headers: this.getHeaders()})
    .do(data => this.lanHouseChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  get(id: number) {
    console.log("aqui get");
    return this.getAll()
    .map((list: any) => list.find(lanHouse => lanHouse.codigo == id))
    .catch(this.handleError);
  }
}


