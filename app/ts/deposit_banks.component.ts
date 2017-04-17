import {Component, Input} from 'angular2/core';

@Component({
    selector: 'deposit_banks',
    templateUrl: 'app/ts/html_components/deposit_banks.component.html'
})

export class BanksComponent {
	@Input() deposit_banks: string;
}