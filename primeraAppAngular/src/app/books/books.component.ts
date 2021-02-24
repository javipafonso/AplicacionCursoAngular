
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vwn-books',
  template: `
    <div class="row">
      <vwn-mocks class="col-6"></vwn-mocks>
      <vwn-search-google-api class="col-6"></vwn-search-google-api>
      <vwn-by-service class="col-6"></vwn-by-service>
      
    </div>
    <div class="row">
      <vwn-by-api-rest class="col-6"></vwn-by-api-rest>
    </div>
  `,
  styles: [
  ]
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
