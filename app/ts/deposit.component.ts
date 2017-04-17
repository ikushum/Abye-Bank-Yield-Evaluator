import {Component} from 'angular2/core';
import {BanksComponent} from './deposit_banks.component';
import {FixedAccountService} from './services/fixed_account.service';
import {SavingAccountService} from './services/saving_account.service';
import {SpecialAccountService} from './services/special_account.service';

@Component({
    selector: 'deposits',
    templateUrl: 'app/ts/html_components/deposit.component.html',
    directives: [BanksComponent],
    providers: [FixedAccountService, SavingAccountService,SpecialAccountService]
})

export class DepositComponent {
	
	deposit_banks: string;
	
  	constructor(private _fixed: FixedAccountService, private _saving: SavingAccountService, private _special: SpecialAccountService) {}

  	getFixedAccounts(){
	  	this._fixed.getBank()
	  		.subscribe(
	  			data => this.deposit_banks= data,
	  			error => console.log(error)
	  		);

  	};

  	getSavingAccounts(){
	  	this._saving.getBank()
	  		.subscribe(
	  			data => this.deposit_banks= data,
	  			error => console.log(error);
	  		);
  	};	

  	getSpecialAccounts(){
	  	this._special.getBank()
	  		.subscribe(
	  			data => this.deposit_banks= data,
	  			error => console.log(error);
	  		);
  	}	

}

