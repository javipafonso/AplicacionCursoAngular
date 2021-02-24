import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'vwn-list-simple',
  templateUrl: './list-simple.component.html',
  styleUrls: ['./list-simple.component.scss']
})
export class ListSimpleComponent implements OnInit {

  tasks : Array<Task>;
  task : Task;

  constructor(private servStorage : StorageService) { }

  ngOnInit(): void {
    this.tasks = this.servStorage.getTask();
    this.task = new Task();
  }

  add(){
    if (!this.task.nombre){
      return
    }
    this.tasks.push(this.task);
    this.task = new Task();
    //console.log(this.task);
    this.salvar();
  }
  delete(){
    this.tasks = [];
    this.salvar();
  }
  private salvar(){
    const number = this.servStorage.setTask(this.tasks);
    console.log('Salvado',number);
  }
}
