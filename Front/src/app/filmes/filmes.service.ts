import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Filme } from './filme';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Injectable()
export class FilmesService {

  private url: string = 'http://localhost:8080/filmes';

  constructor(private http: Http) { }


  getAll(): Observable<Filme[]> {
    return this.http.get(this.url)
            .map(res => res.json())
            .catch(this.handleError);
    
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', error);
    return Observable.throw(erro);
  }
}


