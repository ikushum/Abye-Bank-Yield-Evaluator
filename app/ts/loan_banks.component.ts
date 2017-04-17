import {Component, Input} from 'angular2/core';

@Component({
    selector: 'loan_banks',
    templateUrl: 'app/ts/html_components/loan_banks.component.html'
})

export class BanksComponent {
	@Input() banks: string;
}