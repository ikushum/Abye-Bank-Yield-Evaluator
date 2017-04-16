import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BanksService {

  constructor(private _http: Http) { }

  getCurrentTime(){
    return this._http.get('http://ays.pythonanywhere.com/deposit/fixed_account/')
        .map(res => res.json());
  }
}