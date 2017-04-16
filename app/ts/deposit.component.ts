import {Component} from 'angular2/core';
import {BanksComponent} from './banks.component';
import {BanksService} from './services/fixed_account.service';
import {BanksService} from './services/saving_account.service';
import {BanksService} from './services/special_account.service';

@Component({
    selector: 'deposits',
    templateUrl: 'app/ts/html_components/deposit.component.html',
    directives: [BanksComponent],
    providers: [BanksService]
})

export class DepositComponent {
	
	banks: string;
	
  	constructor(private _http: BanksService) {}

  	onGetRequest(){
	  	this._http.getCurrentTime()
	  		.subscribe(
	  			data => this.banks= data,
	  			error => console.log(error);
	  		);
  	}	

}

