import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vwn-home',
  template: `
    <div class="row">
      <vwn-greeting class="col-6"></vwn-greeting>
      <vwn-greeting-ref class="col-6"></vwn-greeting-ref>
    </div>
  `,
  styles: [
    'vwn-greeting { background-color: bisque}'
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
