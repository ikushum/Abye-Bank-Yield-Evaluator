import {  Pipe, PipeTransform } from 'angular2/core';
@Pipe({ name: 'obj2arr'})

export class Obj2Arr implements PipeTransform {
  transform(value, args:string[]) : any {

    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    } 
    return keys;
  } 
} 