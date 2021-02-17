import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'vwn-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  tasks : Array<Task>;
  constructor() { }

  ngOnInit(): void {
    this.tasks = [];
  }
  addTask(task : Task){
    if (!task.nombre){
      return
    }
    this.tasks.push(task);
    console.log(this.tasks);
      
  }
  deleteTasks(){
    this.tasks = [];
    
  }
}
