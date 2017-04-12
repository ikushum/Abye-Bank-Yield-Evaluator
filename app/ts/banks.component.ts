import {Component} from 'angular2/core';
import {BanksService} from './banks.service';

@Component({
    selector: 'banks',
    templateUrl: 'app/ts/html_components/banks.component.html',
    providers: [BanksService]
})

export class BanksComponent {

	getData: string;
	
  	constructor(private _http: BanksService) {}

  	onGetRequest(){
	  	this._http.getCurrentTime()
	  		.subscribe(
	  			data => this.getData= data;
	  		);
  	}	
}