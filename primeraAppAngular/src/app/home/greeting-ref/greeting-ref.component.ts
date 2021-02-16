import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'vwn-greeting-ref',
  templateUrl: './greeting-ref.component.html',
  styleUrls: ['./greeting-ref.component.scss']
})
export class GreetingRefComponent implements OnInit {

  @ViewChild('name',{static:true} ) refName: ElementRef;
  constructor() { 
    console.log('Desde el constructor')
    console.dir(this.refName);
  }

  ngOnInit(): void {
    console.log('Desde el init')
    console.dir(this.refName.nativeElement);
  }

}
