import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vwn-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  
  message:string;
  name:string;
  
  constructor() { }

  ngOnInit(): void {
    this.name='Alberto';
    this.message ="Tell me your name";
  }
  onClick (event: any){
    this.name = '';
    console.log(event);
  }

}
