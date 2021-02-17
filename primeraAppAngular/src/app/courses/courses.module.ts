import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CoursesComponent, FormTdComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule
  ]
})
export class CoursesModule { }
