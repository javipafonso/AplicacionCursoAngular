import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { ListSimpleComponent } from './list-simple/list-simple.component';
import { FormsModule } from '@angular/forms';
import { NuevaComponent } from './nueva/nueva.component';
import { ItemComponent } from './item/item.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [TasksComponent, ListSimpleComponent, NuevaComponent, ItemComponent, ListaComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule
  ]
})
export class TasksModule { }
