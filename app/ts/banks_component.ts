import {Component} from 'angular2/core';
import {ApiService} from "./api.service.ts"

@Component({
    selector: 'banks',
    templateUrl: 'app/ts/html_components/banks.component.html',
    providers: {ApiService }
})

export class BanksComponent {

	getData: string;
	
	constructor (private _httpService : ApiService){
		this._httpService.getUser()
			.subscribe{
				data => this.getData = JSON.stringify(data),
				error => alert('error'),
				() => console.log('Finished')
			};
	}

}
