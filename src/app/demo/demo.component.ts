import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  name: string = 'Ram'
  age: number = 24
  fno: number = 23
  sno: number = 56
  city: number = 56
  show(): void{
    alert('name is '+this.name + 'Live in ' +this.city)
  }
  sum():number {
    return this.fno + this.sno
  }
  constructor() { }

  ngOnInit(): void {
  }
}
