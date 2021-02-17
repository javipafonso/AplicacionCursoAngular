import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'vwn-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  tasks : Array<Task>;
  store: string;
  constructor() { }

  ngOnInit(): void {
    this.store='tasks';
    this.tasks = localStorage.getItem(this.store) 
        ? JSON.parse(localStorage.getItem(this.store)) : []

  }
  addTask(task : Task){
    if (!task.nombre){
      return
    }
    this.tasks.push(task);
    this.saveStore();
      
  }
  deleteTasks(){
    this.tasks = [];
    this.saveStore();
    
  }
  changeState(index: number) {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted
    this.saveStore()
  }
  saveStore() {
    localStorage.setItem(this.store, JSON.stringify(this.tasks))
  }

}
