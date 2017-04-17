import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SavingAccountService {

  constructor(private _http: Http) { }

  getBank(){
    return this._http.get('http://ays.pythonanywhere.com/deposit/saving_account/')
        .map(res => res.json());
  }
}