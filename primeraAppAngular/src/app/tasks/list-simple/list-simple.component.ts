import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'vwn-list-simple',
  templateUrl: './list-simple.component.html',
  styleUrls: ['./list-simple.component.scss']
})
export class ListSimpleComponent implements OnInit {

  tasks : Array<Task>;
  task : Task;

  constructor() { }

  ngOnInit(): void {
    this.tasks = []
    this.task = new Task();
  }

  add(){
    if (!this.task.nombre){
      return
    }
    this.tasks.push(this.task);
    this.task = new Task();
    console.log(this.task);
  }
  delete(){
    this.tasks = [];
    console.log(this.task);
  }
}
