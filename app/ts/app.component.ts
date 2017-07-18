import {Component} from 'angular2/core';
import {BankservicesComponent} from './bankservices.component'
import {LoanComponent} from './loan.component'
import {DepositComponent} from './deposit.component'


@Component({
    selector: 'myapp',
    templateUrl: 'app/ts/html_components/app.component.html',
    directives: [BankservicesComponent,LoanComponent,DepositComponent]
})

export class AppComponent {}
