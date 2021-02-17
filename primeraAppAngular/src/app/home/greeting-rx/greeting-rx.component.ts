import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'vwn-greeting-rx',
  templateUrl: './greeting-rx.component.html',
  styleUrls: ['./greeting-rx.component.scss']
})
export class GreetingRxComponent implements OnInit {
  mens: string
  fcName: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.mens = 'Tell me your name'
    this.fcName = new FormControl('')
  }
  onClick(ev) {
    console.log(ev)
    this.fcName.reset('')
  }

}
