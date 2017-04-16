import {Component} from 'angular2/core';
import {BanksComponent} from './banks.component';
import {HomeLoanService} from './services/home_loan.service';
import {CarLoanService} from './services/car_loan.service';
import {StudentLoanService} from './services/student_loan.service';

@Component({
    selector: 'loans',
    templateUrl: 'app/ts/html_components/loan.component.html',
    directives: [BanksComponent],
    providers: [HomeLoanService,CarLoanService,StudentLoanService]
})

export class LoanComponent {
	
	banks: string;
	
  	constructor(private _home: HomeLoanService, private _car: CarLoanService, private _student: StudentLoanService) {}

  	getHomeLoans(){
	  	this._home.getBank()
	  		.subscribe(
	  			data => this.banks= data,
	  			error => console.log(error);
	  		);
  	};

  	getCarLoans(){
	  	this._car.getBank()
	  		.subscribe(
	  			data => this.banks= data,
	  			error => console.log(error);
	  		);
  	};	

  	getStudentLoans(){
	  	this._student.getBank()
	  		.subscribe(
	  			data => this.banks= data,
	  			error => console.log(error);
	  		);
  	};	

}
