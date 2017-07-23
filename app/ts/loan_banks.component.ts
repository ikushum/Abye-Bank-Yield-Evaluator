import {Component, Input} from 'angular2/core';
import {Obj2Arr} from './obj2arr.pipe';
import {NgModel} from 'angular2/forms';


@Component({
    selector: 'loan_banks',
    templateUrl: 'app/ts/html_components/loan_banks.component.html',
    pipes : [Obj2Arr]
})

export class BanksComponent {
    @Input() banks: string;
    selectedEmployees = [];

    constructor() {}
  
    
    change(obj){
        let updateItem = this.selectedEmployees.find(this.findIndexToUpdate, obj));
        let index = this.selectedEmployees.indexOf(updateItem);
        console.log(index);
        if(index > -1){
        this.selectedEmployees.splice(index, 1);
        console.log(this.selectedEmployees);
        }
        else{
        this.selectedEmployees.push(obj);
        console.log(this.selectedEmployees);
        }
    }

    findIndexToUpdate(obj) { 
            return obj === this;
    }
    

}