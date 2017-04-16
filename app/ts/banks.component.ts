import {Component, Input} from 'angular2/core';

@Component({
    selector: 'banks',
    templateUrl: 'app/ts/html_components/banks.component.html'
})

export class BanksComponent {
	@Input() banks: string;
}