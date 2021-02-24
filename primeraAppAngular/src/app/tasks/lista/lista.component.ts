import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'vwn-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  tasks : Array<Task>;
  //store: string;
  constructor(private servStorage : StorageService) { }

  ngOnInit(): void {
    this.tasks = this.servStorage.getTask();
    //this.store='tasks';
    /*this.tasks = localStorage.getItem(this.store) 
        ? JSON.parse(localStorage.getItem(this.store)) : []*/

  }
  addTask(task : Task){
    if (!task.nombre){
      return
    }
    this.tasks.push(task);
    this.saveStore();
      
  }
  deleteTasks(){
    this.tasks = []
    this.saveStore();
    
  }
  changeState(index: number) {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted
    this.saveStore()
  }
  private saveStore() {
    const number = this.servStorage.setTask(this.tasks);
    console.log('Savado número', number);
    //localStorage.setItem(this.store, JSON.stringify(this.tasks))
  }
  deleteOneTask(index: number){
    this.tasks.splice(index,1)
    this.saveStore()

  }

}
