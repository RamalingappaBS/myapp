import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  weekdays:string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  age:number=30
  emplist:Employee[]=[
    {id:101,name:'Rahim',salary:50000,dept:'IT'},
    {id:102,name:'Rama',salary:40000,dept:'HR'},
    {id:103,name:'Krishna',salary:70000,dept:'Account'},
    {id:104,name:'Sanju',salary:85000,dept:'Marketing'},
    {id:105,name:'Kishan',salary:90000,dept:'Head'},
  ]
  GetTotal():number{
    var total:number=0
    for(var i=0; i < this.emplist.length; i++){
      total = total + this.emplist[i].salary
    }
    return total
  }
  constructor(private msgservice:MessageService) { }
msg= this.msgservice.Display('Rama')
  ngOnInit(): void {
  }
}
