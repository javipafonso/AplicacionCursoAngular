import { Component, OnInit, ViewChild } from '@angular/core';
import { CURSOS, TURNOS } from 'src/app/models/master.data';
import { Curso, Students, Turno } from 'src/app/models/students';
import {  NgForm} from '@angular/forms';

@Component({
  selector: 'vwn-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.scss']
})
export class FormTdComponent implements OnInit {
  shifts: Array<Turno>;
  courses: Array<Curso>;
  student: Students;
  @ViewChild('formsStudents',{static:true}) form: NgForm;
  constructor() { }

  ngOnInit(): void {
    this.courses = CURSOS;
    this.shifts = TURNOS;
    console.log(this.form)
  }
  enviar(){
    this.student = this.form.value;
    console.log(this.student)
  }
}
