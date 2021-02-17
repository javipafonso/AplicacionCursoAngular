import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vwn-tasks',
  template: `
  <div class="row">
    <vwn-lista class="col-6"></vwn-lista>
    <vwn-list-simple class="col-6"></vwn-list-simple>
</div>
  `,
  styles: [
  ]
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
