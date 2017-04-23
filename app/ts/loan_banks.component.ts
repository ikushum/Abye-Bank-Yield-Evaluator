import {Component, Input} from 'angular2/core';
import {Obj2Arr} from './obj2arr.pipe';


@Component({
    selector: 'loan_banks',
    templateUrl: 'app/ts/html_components/loan_banks.component.html',
    pipes : [Obj2Arr]
})

export class BanksComponent {
	@Input() banks: string;
}