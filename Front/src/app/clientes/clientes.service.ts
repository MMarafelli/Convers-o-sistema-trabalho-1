import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, RequestOptionsArgs } from '@angular/http';
import { Cliente } from './cliente';

import { Observable, of, throwError, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url: string = 'http://localhost:8080/cliente';

  clientesChanged = new EventEmitter<Observable<Cliente[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<Cliente[]> {
    return this.http.get(this.url)
    .pipe(
      map(res => res.json().data),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', error);
    return Observable.throw(erro);
  }

  add(cliente: Cliente ) {
    console.log(JSON.stringify(cliente));
    return this.http.post(this.url,JSON.stringify(cliente),
    {headers: this.getHeaders()})
  }
  
  remove(id: number) {
    return this.http.delete(this.getUrl(id),
    {headers: this.getHeaders()})
    .pipe(
      map(res => res.json()),
      tap(data => this.clientesChanged.emit(this.getAll())),
      catchError(this.handleError));
  }
  
  getHeaders(): any {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return headers;
  }
  
  getUrl(id: number) {
    return `${this.url}/${id}`;
  }

  update(cliente: Cliente) {
    return this.http.put(this.url,JSON.stringify(cliente),
    {headers: this.getHeaders()})
    .pipe(
      tap(data => this.clientesChanged.emit(this.getAll())),
      catchError(this.handleError));
  }

  get(id: number) {
    return this.getAll()
      .pipe(
        map((list: any) => list.find(cliente => cliente.codigo == id)),
        catchError(this.handleError));
  }
}
