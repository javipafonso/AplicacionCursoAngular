import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'vwn-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit {
  task: Task;
  @Output() eventAdd:EventEmitter<Task>;
  @Output() eventDelete:EventEmitter<void>
  constructor() { 
    this.eventAdd = new EventEmitter();
    this.eventDelete = new EventEmitter();
  }
  
  ngOnInit(): void {
    this.task = new Task();
    
  }
  add(){
    if (!this.task.nombre){
      return
    }
     this.eventAdd.next(this.task);
     this.task = new Task();
  }
  delete(){
    this.eventDelete.next();
   
  }

}
