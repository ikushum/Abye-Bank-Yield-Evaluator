import {Component} from 'angular2/core';
import {BankservicesComponent} from './bankservices.component'
import {LoanComponent} from './loan_component'


@Component({
    selector: 'myapp',
    templateUrl: 'app/ts/html_components/app.component.html',
    directives: [BankservicesComponent,LoanComponent]
})

export class AppComponent {}
