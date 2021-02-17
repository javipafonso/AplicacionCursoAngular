import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'vwn-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  
  @Input() task: Task;
  @Input() index: number;
  @Output() evCheck: EventEmitter<number>
  @Output() evDelete: EventEmitter<number>
  constructor() { 
    this.evCheck = new EventEmitter()
    this.evDelete = new EventEmitter()
  }
  ngOnInit(): void {
  
    this.task = {...this.task}
  }
  change(){
    this.evCheck.next(this.index)
  }
  delete(){
    this.evDelete.next(this.index)
  }

}
