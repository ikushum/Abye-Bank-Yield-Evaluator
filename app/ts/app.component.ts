import {Component} from 'angular2/core';
import {BankservicesComponent} from './bankservices.component'

@Component({
    selector: 'myapp',
    templateUrl: 'app/ts/app.component.html',
    directives: [BankservicesComponent]
})

export class AppComponent {}
