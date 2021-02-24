import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storeTasks:string;
  numSaves: number;
  constructor() { 
    this.storeTasks = 'Tasks'
    this.numSaves = 0;
  }
  
  setTask(tasks : Array<Task>){
    localStorage.setItem(this.storeTasks, JSON.stringify(tasks));
    return ++this.numSaves;
  }
  getTask(): Array<Task>{
      const data : Array<Task> = localStorage.getItem(this.storeTasks) ? JSON.parse(localStorage.getItem(this.storeTasks)) : []
      return data;
  }
}
