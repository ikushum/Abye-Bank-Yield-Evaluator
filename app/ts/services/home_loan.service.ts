import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeLoanService {

  constructor(private _http: Http) { }

  getBank(){
    return this._http.get('app/ts/services/demo.json')
        .map(res => res.json());
  }
}